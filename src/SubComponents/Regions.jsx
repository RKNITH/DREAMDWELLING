import React from 'react';

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>Explore Our Regions</h1>
        <p>Discover the perfect place for your next stay. Whether you crave the tranquility of the mountains or the vibrancy of the coastline, we have properties that cater to every taste and preference.</p>
        <div className="region_container">
          <div className="card">
            <img src="/region1.jpg" alt="mountains" />
            <h2>Mountains</h2>
            <p><span>90</span> Exclusive Properties</p>
          </div>
          <div className="card">
            <img src="/region2.jpg" alt="coastline" />
            <h2>Coastline</h2>
            <p><span>52</span> Beachfront Properties</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Regions;
