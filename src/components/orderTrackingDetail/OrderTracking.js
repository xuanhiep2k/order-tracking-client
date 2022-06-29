import React from 'react'
import './orderTracking.css'
import dateFormat from "dateformat";
import { useSelector } from 'react-redux';
import ProgressBar from '../../components/progressBar/ProgressBar';
import NotFound from '../notFound/NotFound';
function OrderTracking({ code }) {


    const getTrackings = useSelector((state) => state.getTrackings);
    const { loading, trackings } = getTrackings;
    return (
        <div className="orderTracking">

            <div className="orderDetail">
                <div className="title">
                    <h3>Order Number:</h3>
                    <h3 className='OrderNumber'>{code}</h3>
                    <h3 className='amountOrder'>({trackings.length})</h3>
                </div>

                {loading ? (
                    <ProgressBar />
                ) : trackings === false ? (
                    <NotFound />
                ) : (
                    trackings.map((tracking) => (
                        <>
                            <p className="status">Status:
                                <span className="status">{tracking.status}</span>
                            </p>
                            <p className="supplier">Supplier: {tracking.supplierName}</p>
                            <p className="historyTracking">History Tracking: </p>
                           <hr className="my-4" />
                                                      <ul class="sessions">
                                {(
                                    tracking.listHistory.map((history) => (
                                        <><li className='history'>
                                            <div class="time">{dateFormat(history.timeArrived, "yyyy-mm-dd HH:mm:ss")}</div>
                                            <p>{history.location}</p>
                                        </li>
                                        </>
                                    ))
                                )}
                            </ul>
                            < hr className="my-4" />
                        </>
                    ))

                )}

            </div>

        </div >
    )
}

export default OrderTracking