import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <Link to="/" className="logo">
                        <h1>Hotel<span>loy</span></h1>
                    </Link>
                    <nav className="nav">
                        <ul className="nav_list">
                            <li className="nav_item">
                                <Link to="/" className="nav_link">Home</Link>
                            </li>
                            <li className="nav_item">
                                <Link to="/rooms" className="nav_link">Rooms</Link>
                            </li>
                        </ul>
                    </nav> 
                </div>
            </div>
        </header>
    )
}
