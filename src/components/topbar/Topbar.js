import React from 'react'
import './topbar.css'

function Topbar() {
    return (
        <div className="topbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Order Tracking</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Login</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">About</a>
                            </div>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Topbar