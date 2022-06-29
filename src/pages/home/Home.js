import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import './home.css'
import About from '../../components/about/About.js';
import OrderTracking from '../../components/orderTrackingDetail/OrderTracking';

import { getTrackings } from '../../redux/actions/getOrderTrackingAction.js'

function Home() {

    const [showOrderTracking, setShowOrderTracking] = React.useState(false)

    const dispatch = useDispatch();
    const [code, setCode] = useState();

    const trackingByCode = () => {
        if (code.length !== 0) {
            dispatch(getTrackings(code));
            setShowOrderTracking(true);
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = () => {
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="home">
                <div className="form-tracking">
                    <div class="input-group mb-3 input-group-lg">
                        <input required {...register("code", {
                            required: true
                        })} type="text" class="form-control" placeholder="Enter order number here..." onChange={(e) => setCode(e.target.value)} value={code ?? ""} aria-describedby="basic-addon2" />

                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit" onClick={trackingByCode}>TRACK PACKAGE</button>

                        </div>
                    </div>
                </div>

                {showOrderTracking ? <OrderTracking code={code} /> : null}
                <About />
            </div>
        </form>
    )
}

export default Home