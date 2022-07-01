import React, { useState, useEffect } from 'react'
import './orderTracking.css'
import dateFormat from "dateformat";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import ProgressBar from '../../components/progressBar/ProgressBar';
import NotFound from '../notFound/NotFound';
import { useParams } from 'react-router-dom';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
let count = 0;
function OrderTracking() {
    const { code } = useParams();
    const [isLoad1, showIsLoad1] = useState(true);
    const [isLoad2, showIsLoad2] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchEventSource(`/api/task-service/get_order_detail/${code}`, {
                method: "GET",
                headers: {
                    Accept: "text/event-stream",
                },

                onopen(res) {
                    if (res.ok && res.status === 200) {
                        console.log("Connection made ", res);
                        count++;
                        if (count === 1) {
                            showIsLoad1(false);

                        } if (count === 2) {
                            showIsLoad2(false);
                        }
                    } else if (
                        res.status >= 400 &&
                        res.status < 500 &&
                        res.status !== 429
                    ) {
                        console.log("Client side error ", res);
                    }
                },
                onmessage(event) {
                    const parsedData = JSON.parse(event.data);
                    setData(parsedData);
                },
                onclose() {
                    console.log("Connection closed by the server");
                },
                onerror(err) {
                    console.log("There was an error from server", err);
                },

            });
        };
        fetchData();
    }, []);
    return (
        <div className="orderTracking">
            <ReactNotifications />

            {isLoad1 ? <><ProgressBar /></> : <><p style={{ "marginLeft": "200px", color: "red", "fontWeight": "bold" }}>Order Service Completed</p></>}
            {isLoad2 ? <><ProgressBar /></> : <><p style={{ "marginLeft": "200px", color: "red", "fontWeight": "bold" }}>Order Detail Service Completed</p></>}
            <div className="title">
                <h3>Order Number:</h3>
                <h3 className='OrderNumber'>{code}</h3>

            </div>
            {data === 0 ? <><NotFound /></> :
                data.map((tracking, i) => {
                    return <div key={i} className="orderTracking">
                        <div className="orderDetail">

                        </div>
                        <p className="status">Status:
                            <span className="status">{tracking.status}</span>
                        </p>
                        <p className="supplier">Supplier: {tracking.supplierName}</p>
                        <p className="historyTracking">History Tracking: </p>
                        <hr className="my-4" />
                        <ul class="sessions">
                            {(
                                tracking.listHistory.map((history, t) => (
                                    <li key={t} className='history'>
                                        <div class="time">{dateFormat(history.timeArrived, "yyyy-mm-dd HH:mm:ss")}</div>

                                        <p>{history.location}</p>
                                    </li>

                                ))
                            )}
                        </ul>
                        {Store.addNotification({
                            title: "Send Mail! & Telegram",
                            message: "Send Mail & Telegram Successfully",
                            type: "success",
                            insert: "top",
                            container: "top-left",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 5000,
                                onScreen: true
                            }
                        })}
                    </div>

                })
            }
        </div >
    )
}

export default OrderTracking