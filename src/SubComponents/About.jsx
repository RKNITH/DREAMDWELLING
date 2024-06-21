import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>About Us</h1>
            <p>
              Welcome to DreamDwelling! We are dedicated to helping you find the perfect home. Our team of experts works tirelessly to ensure that every property we offer meets the highest standards of comfort and luxury.
            </p>
            <p>
              Founded with the vision of revolutionizing the real estate experience, we believe in providing personalized services tailored to your unique needs. Whether you are looking for a serene mountain retreat or a vibrant city apartment, we have something for everyone.
            </p>
            <p>
              Our commitment goes beyond just finding you a place to stay. We strive to create a seamless and enjoyable experience from start to finish. Our user-friendly platform, combined with our extensive knowledge of the market, makes it easier than ever to discover your dream home.
            </p>
            <p>
              Join our community and experience the difference with DreamDwelling. We are here to make your dream of finding the perfect home a reality.
            </p>
          </div>
          <button>We strive to offer you the best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="/people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
