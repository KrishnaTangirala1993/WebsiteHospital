import React, { useState } from "react";
import "./Navbar.css";
import { FaFacebookSquare,
     FaInstagramSquare,
     FaYoutubeSquare
 } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Navbar = ()  => {
const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            {/* 1st menu part*/}

            <nav className="main-nav">
                <div classname="logo">
                    <h2>
                        {/* <span>K</span>unda
                        <span>H</span>ospitals */}
                        
      <a href="/home"><img src="kundasymbol.jpg" width="132" height="100" alt=""/></a>
    
                    </h2>
                </div>
                {/* 2nd menu part*/}
                <div className= { showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
                    <ul>
                    <li>
                            <p className="kunda">Kunda Hospitals</p>
                        </li>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                            {/* <Navbar.Link as={Link} to= "/components/About">About</Navbar.Link> */}
                        </li>
                        <li>
                            <a href="/specialities">Specialities</a>
                        </li>
                        <li>
                            <a href="/appointment">Appointment</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>

                    </ul>
                </div>
                {/* 3rd  Social Media*/}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.youtube.com/channel/UC-GsaPF2s397IezLHtJmwIg" target="_kunda"><FaFacebookSquare /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC-GsaPF2s397IezLHtJmwIg" target="_kunda"><FaInstagramSquare /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC-GsaPF2s397IezLHtJmwIg" target="_kunda"><FaYoutubeSquare /></a>
                        </li>
                    </ul>
                    {/*menu start */}
                    <div className="hamburger-menu">
<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
    <GiHamburgerMenu />
</a>
                    </div>
                </div>

            </nav>
            {/*Main Section*/}
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>Kunda Hospitals</h1>
            </section>
        </>

    );
}

export default Navbar;