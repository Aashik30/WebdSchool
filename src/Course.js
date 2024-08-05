import React from 'react';
import './App.css';

const Course = () => {

    return (
        <div className="courseSection">
            <div className="gridLayout">
                <div className="courseSections">
                    <div className="courseSectionImage aos-init" data-aos="zoom-in-right">
                        <img src={`${process.env.PUBLIC_URL}/ProjectssImages1.png`} alt="CoursesImage" />
                    </div>
                    <div className="courseSectionContent aos-init aos-animate" data-aos="zoom-in-left">
                        <h2>
                            <span id="elementThree">Tanjore Painting Course - 7 months.</span>
                            <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
                        </h2>
                        <p>
                            Embark on a transformative journey into the captivating world of Tanjore painting with Vridhi School of Arts! This comprehensive 7-month course is meticulously designed to guide you, step-by-step, from a complete beginner to a confident Tanjore painting artist.
                        </p>
                        <a href="courses.html">
                            <button>View More</button>
                        </a>
                        <div className="achivements">
                            <div className="achive-1 achive">
                                <h3>12K</h3>
                                <p>Incredible <br />Journey</p>
                            </div>
                            <div className="achive-2 achive">
                                <h3>98+</h3>
                                <p>Best <br />Places</p>
                            </div>
                            <div className="achive-3 achive">
                                <h3>21+</h3>
                                <p>Years <br />Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
