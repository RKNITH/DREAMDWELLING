import React from "react";
import AboutComponentMini from "../../SubComponents/About";

const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your Peace of Mind, Our Priority!</h3>
          <p>
            At DreamDwelling, we understand that finding the perfect home is more than just a transaction; it’s about creating a sanctuary where you can thrive. Our commitment to excellence ensures that every detail is taken care of, so you can focus on what truly matters.
          </p>
          <p>
            With years of experience in the real estate market, our team is dedicated to providing personalized service tailored to your needs. Whether you're seeking a luxurious villa, a cozy apartment, or a unique property, we are here to guide you every step of the way.
          </p>
          <p>
            We believe in transparency, trust, and integrity. Our goal is to build lasting relationships with our clients, offering ongoing support and expert advice. Discover how DreamDwelling can make your real estate journey smooth and stress-free.
          </p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
