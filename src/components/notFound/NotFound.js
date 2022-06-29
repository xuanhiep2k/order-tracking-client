import React from 'react'
import './notFound.css'
import { not_found_search } from '../../dummyData.js'

function NotFound() {
    return (
        <div className="notFound">
            <img src={not_found_search} alt="" />
            <p>Your search does not match any results.</p>
        </div>
    )
}

export default NotFound