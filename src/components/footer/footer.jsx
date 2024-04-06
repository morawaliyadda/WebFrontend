import React from 'react';
import './footer.css';
import AppLogo from '../../assests/AppLogo.png';
import AppName from '../../assests/AppName.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="rows">
                    <div className="column">
                        <div className='footer-about-heding'>
                            <img src={AppLogo} alt=" " height="40" width="40" />
                            <img src={AppName} className='appname' alt=" " height="30" width="250" />
                        </div>
                        <h6>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</h6>
                    </div>
                    <div className='column2'>
                    <div className="column-new">
                        <h5>Our Technologies</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">ReactJS</a></li>
                            <li><a href="/">Gatsby</a></li>
                            <li><a href="/">NextJS</a></li>
                            <li><a href="/">NodeJS</a></li>
                        </ul>
                    </div>
                    <div className="column-new">
                        <h5>Our Services</h5>
                        <ul className="list-unstyled">
                            <li>Social media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                        </ul>
                    </div>
                    </div>
                   
                </div>
                <div className="rows">
                    <div className="text-center">
                        <p>Privacy Policy | Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
