import React from "react";
import { villas } from "../villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopVillas = () => {
  return (
    <section id="topVillas">
      <h1>Top Pick Villas</h1>
      <p>
        Discover our exclusive selection of top-rated villas. Each property is
        carefully chosen to provide the ultimate luxury and comfort for your
        stay. Experience unparalleled hospitality in the most beautiful
        locations.
      </p>
      <div className="villasContainer">
        {villas.slice(0, 3).map((element) => {
          return (
            <Link to={`/villa/${element.id}`} className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <div className="location_text">
                <span>{element.location}</span>
                <span>
                  <RxDot />
                </span>
                <span>{element.category}</span>
              </div>
              <div className="title_text">{element.name}</div>
              <div className="specifications">
                <div className="spec">
                  <IoIosPeople />
                  <span>{element.guests}</span>
                  Guests
                </div>
                <div className="spec">
                  <FaBed />
                  <span>{element.bedrooms}</span>
                  Bedrooms
                </div>
                <div className="spec">
                  <BiArea />
                  <span>{element.squareMeter}</span>
                  Area
                </div>
                <div className="spec">
                  <FaBath />
                  <span>{element.bathrooms}</span>
                  Bathrooms
                </div>
              </div>
              <div className="badge">
                From <span>€{element.dailyRent} / Day </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;
