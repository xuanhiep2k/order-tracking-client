import React from 'react'
import { about_right } from '../../dummyData.js'

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <h2>Group 15 Order Tracking</h2>
                <p>Cainiao, a subsidiary of Alibaba Group, launched a new type of delivery - Cainiao Super Economy - on July 20, 2018 to compete with the well-known methods of delivery of the China Post Ordinary Small Packet Plus, the Yanwen Economic Air Mail, the SF Economic Air Mail and the SunYou Economic Air Mail .
                </p>
                <p>
                    Tracking numbers for Cainiao Super Economy are similar to UA077332171HK, and you can track them both on the official website of Cainiao and with our tracking portal.

                    With Parcels app, you can track the Cainiao Super Economy shipments, as well as any package shipped from China, Hong Kong, Singapore, Malaysia.</p>
            </div>
            <div className="about-right">
                <img src={about_right} alt="" />
            </div>
        </div>
    )
}

export default About