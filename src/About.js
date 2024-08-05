import React from 'react';
import './App.css';

const About = () => {
    
    return (
        <div className="gridLayout">
            <div className="AboutUsSection">
                <div className="AboutUsContent aos-init aos-animate" data-aos="zoom-in-right">
                    <h4>About Us: Vridhi School of Arts</h4>
                    <h2>
                        <span id="element">Preserving the Legacy of Tanjore Painting.</span>
                        <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
                    </h2>
                    <p>
                        Vridhi School of Arts was founded in [Year] by Alagusundaram N., a passionate and dedicated artist with over 21 years of experience in the exquisite art form of Tanjore painting.
                        We invite you to join us at Vridhi School of Arts and explore the captivating world of traditional art forms. Let's create, learn, and grow together!
                    </p>
                    <a href="#COURSES">
                        <button>Learn More</button>
                    </a>
                </div>
                <div className="AboutUsImage aos-init aos-animate" data-aos="zoom-in-left">
                    <img src={`${process.env.PUBLIC_URL}/AboutUS.png`}  alt="AboutUsImage" />
                </div>
            </div>
        </div>
    );
};

export default About;
