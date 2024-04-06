import React, { useState } from "react";
import "./navbar.css";
import AppLogo from '../../assests/AppLogo.png';
import AppName from '../../assests/AppName.png';

function NavBar() {
    const [active, setActive] = useState(false);
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");

    const navToggle = () => {
        setActive(!active);
        setToggleIcon(
            toggleIcon === "nav-toggler" ? "nav-toggler toggle" : "nav-toggler"
        );
    };

    return (
        <nav className="nav">
            <div className="applogo">
                <img src={AppLogo}  alt=" " height="42" width="50" />
                <img src={AppName} className="appname" alt=" " height="30" width="250" />
            </div>
            <ul className={active ? "nav-menu nav-active" : "nav-menu"}>
                {active && (
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            HOME
                        </a>
                    </li>
                )}
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        SERVICES
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        ABOUT US
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        CONTACT US
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        CAREERS
                    </a>
                </li>


            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default NavBar;
