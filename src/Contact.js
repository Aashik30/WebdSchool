import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="gridLayout">
            <div className="contactSection aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
                <h4>Contact Us</h4>
                <h2>We are ready to receive your message</h2>
                <div className="contactBackground">
                    <div className="ContactContainer">
                        <div className="contactWhite">
                            <div className="contactWhites whiteOne">
                                <h3><FontAwesomeIcon icon={faPhone} /> &nbsp;Call Us</h3>
                                <p>+91 9940454908</p>
                            </div>
                            <div className="contactWhites whiteTwo">
                                <h3><FontAwesomeIcon icon={faAddressBook} /> &nbsp;Meet Us</h3>
                                <p>48A Chander Plaza, Arcot Road, Saligramam, Chennai-600093</p>
                            </div>
                            <div className="contactWhites whiteThree">
                                <h3><FontAwesomeIcon icon={faEnvelope} /> &nbsp;Email Us</h3>
                                <p>alaghu18@gmail.com</p>
                            </div>
                        </div>
                        <div className="contactGreen">
                            <input type="text" placeholder="Name*" />
                            <input type="text" placeholder="Email*" />
                            <textarea rows="5" placeholder="Message*"></textarea>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
