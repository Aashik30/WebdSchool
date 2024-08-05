import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const reviews = [
    {
        name: "Mohitha Sri",
        imgSrc: `${process.env.PUBLIC_URL}/Img1.jpg`,
        rating: 5,
        review: "Best Tanjore Painting class I have attended. Sir is very patient in teaching us every detail step by step and showing us in the online class also slowly. His experience and his dedication towards teaching students is impressive. It has been a great honor to attend his class. I have previously gone to other teachers also but never experienced authentic traditional art being taught so well."
    },
    {
        name: "Devasena Elangovan",
        imgSrc: `${process.env.PUBLIC_URL}/Img2.jpg`,
        rating: 5,
        review: "Your guidance not only imparted valuable skills but also inspired a deep appreciation for the intricate details,vibrant colors, and rich cultural heritage associated with Tanjore paintings. Your patience and encouragement throughout the learning process made it a memorable and enjoyable experience."
    },
    {
        name: "Hiranmaiyaee Ravichandran",
        imgSrc: `${process.env.PUBLIC_URL}/Img3.jpg`,
        rating: 5,
        review: "It's all starts for me. If you want to learn Thanjavur painting in the most traditional way from the scratch, you can go for it.The only pre-requiste required is the interest to learn. Not just painting, you learn bouts of values that take back for life"
    },
    {
        name: "Kavitha",
        imgSrc: `${process.env.PUBLIC_URL}/Img4.jpg`,
        rating: 5,
        review: "Sir whenever i have seen you painting and teaching us I have always thought it's the divine blessing to be your student.So much perfection in your teaching and the selfness with which you share all the small nuances of the art is something for which I will be ever grateful to you Sir. Thanks and Gratitude Sir🙏."
    },
    {
        name: "Geetha chandrasekaran",
        imgSrc: `${process.env.PUBLIC_URL}/Img5.jpg`,
        rating: 5,
        review: "My great guru i am so happy and excited to learn this noble art from a noble teacher. He is so slefness and patient in teaching this art form and teaches all the nuiances. He is the best teacher for those who want to learn Tanjore painting in tradional way. And the best thing is he is not at all money minded.. i have seen people who teaches only for monetary benefit but my sir seriously does with great love passion and dedication for this art.. And also he is taking this art to worlwide who can't come and learn directly through his online classes.I want always to travel with him and learn this great art from my sir.my guru paranam 🙏🙏."
    }
    // Add more review objects as needed
];

const Review = () => {
    return (
        <div className="gridLayout">
            <div className="ReviewSection aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
                <h4>OUR TESTIMONIALS</h4>
                <h2>What Our Students Say About Us</h2>
                <Carousel 
                    showThumbs={false} 
                    showStatus={false} 
                    infiniteLoop={true} 
                    autoPlay={true} 
                    interval={3000}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-left">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-right">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        )
                    }
                >
                    {reviews.map((review, index) => (
                        <div className="reviews" key={index}>
                            <img src={review.imgSrc} alt="reviewimg" className="ReviewerImage" />
                            <h3 className="ReviewerName">{review.name}</h3>
                            <h6 className="StartRating">
                                {Array(review.rating).fill().map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} />
                                ))}
                            </h6>
                            <p className="ActualReview">{review.review}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Review;
