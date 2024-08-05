// src/components/Footer.js
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faWhatsapp, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="gridLayout">
                    <div className="footerSection">
                        <div className="footerLogo">
                            <img src={`${process.env.PUBLIC_URL}/FooterLogo.png`} alt="footerImage" />
                        </div>
                        <div className="SiteMap">
                            <h3>Site Map</h3>
                            <a href="#HOME"><h5>Home</h5></a>
                            <a href="#ABOUT"><h5>About</h5></a>
                            <a href="#COURSES"><h5>Courses</h5></a>
                            <a href="#GALLERY"><h5>Gallery</h5></a>
                            <a href="#CONTACT"><h5>Contact</h5></a>
                            <a href="#REVIEW"><h5>Reviews</h5></a>
                        </div>
                        <div className="SocialLinks">
                            <h3>Social Links</h3>
                            <a href="https://www.instagram.com/vridhi_school_of_arts?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                <h5><FontAwesomeIcon icon={faInstagram} /> Instagram</h5>
                            </a>
                            <a href="#">
                                <h5><FontAwesomeIcon icon={faYoutube} /> Youtube</h5>
                            </a>
                            <a href="https://wa.me/919940454908" target="_blank" rel="noopener noreferrer">
                                <h5><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</h5>
                            </a>
                            <a href="#">
                                <h5><FontAwesomeIcon icon={faTwitter} /> Twitter</h5>
                            </a>
                            <a href="#">
                                <h5><FontAwesomeIcon icon={faFacebook} /> Facebook</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="CopyRights">
                <h4>Copyrigths©2024 All Rights Reserved</h4>
            </div>
        </>
    );
};

export default Footer;
