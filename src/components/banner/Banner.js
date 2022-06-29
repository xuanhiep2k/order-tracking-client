import React from 'react'
import './banner.css'
import { logo } from '../../dummyData.js'

function Banner() {
    return (
        <div className="banner">
            <img src={logo} alt="banner" />
        </div>
    )
}

export default Banner