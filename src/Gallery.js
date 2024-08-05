import React from 'react';
import './App.css'; 

const Gallery = () => {
    return (
        <div className="gridLayout">
            <div className="gallerySection aos-init" data-aos="fade-up" data-aos-duration="3000">
                <h4>Art is Life</h4>
                <h2>Art Gallery of Vridhi</h2>
                <div className="Galleryyy">
                    <div className="galleryOne">
                        <img src={`${process.env.PUBLIC_URL}/GroupingOne.png`} alt="Art Gallery 1" className="Imageone" />
                        <img src={`${process.env.PUBLIC_URL}/GroupingTwo.png`} alt="Art Gallery 2" className="ImageTwo" />
                    </div>
                    <div className="galleryTwo">
                        <img src={`${process.env.PUBLIC_URL}/GroupingThree.png`} alt="Art Gallery 3" className="ImageThree" />
                        <img src={`${process.env.PUBLIC_URL}/GroupingFour.png`} alt="Art Gallery 4" className="ImageFour" />
                    </div>
                </div>
                <div className="Viewmorebutton">
                    <a href="gallery.html"><button>View More</button></a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
