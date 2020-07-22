import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";

export default function Navbar(){
    return (
        <div >
        {/* Responsive navigation bar, directs user to About Me, Portfolio, or Contact page */}
            <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to="/" id="logo" className="navbar-brand">Arash Bazrafshan</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-text">
                <ul className="navbar-nav mr-auto">
                    {/* List will redirect user to each of the three pages of this web site */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Me <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="portfolio">Portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="contact">Contact <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </span>
          </nav>
        </div>
    )
}

