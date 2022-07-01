import React, { useState, useEffect } from 'react'
import './home.css'
import NotFound from '../../components/notFound/NotFound';
import ProgressBar from '../../components/progressBar/ProgressBar';

import { Link } from 'react-router-dom';


function Home() {
    const [code, setCode] = useState();
    const inputRef = React.createRef()

    return (

        <div className="home">
            <div className="form-tracking">
                <div class="input-group mb-3 input-group-lg">
                    <input required type="text" class="form-control" onChange={(e) => setCode(e.target.value)} value={code ?? ""} placeholder="Enter order number here..." aria-describedby="basic-addon2" />
                    <Link to={`/getTrack/${code}`} className="info__button">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit"  >TRACK PACKAGE</button>
                        </div>
                    </Link>

                </div>

            </div>


        </div >
    )
}

export default Home