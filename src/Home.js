import React from 'react';
import './App.css'; 

const Home = () => {

  return (
    <div className="gridLayout">
      <div className="herosSection">
        <div className="herosectionContent" data-aos="fade-up" data-aos-duration="3000">
          <h3>Learn The Tradition</h3>
          <h1>
            <span id="elementOne">Experience the <br /> Tradition of <br /> Tanjore . <img src={`${process.env.PUBLIC_URL}/Vector6.png`} alt="" /></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
          </h1>
          <p>Bring the Artist Within You to Life. Learn Tanjore Painting from Anywhere, Uncover Your Artistic Potential. Enroll Today</p>
          <div className="herosectionContentButtons">
            <a href="#CONTACT"><button className="ContentButtonOne">Get Started</button></a>
            <a href="#ABOUT">
              <div className="ContentButtonTwo">
                <h6>Learn More</h6>
              </div>
            </a>
          </div>
        </div>
        <div className="herosectionImage" data-aos="fade-up" data-aos-duration="3000">
          <img src={`${process.env.PUBLIC_URL}/Herosectionimg.png`} alt="herosectionimage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
