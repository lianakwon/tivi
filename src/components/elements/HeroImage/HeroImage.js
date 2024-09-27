import React from "react";
import "./HeroImage.css";
import { Link } from "react-router-dom";

const HeroImage = props => {
  return (
    <div className="rmdb-heroimage">
      <div className="rmdb-heroimage_thumb"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
          39%, rgba(0,0,0,0)
          41%, rgba(0,0,0,0.65)
          100%), url('${props.image}'), #1c1c1c`
        }}>
      </div>
      <div className="rmdb-heroimage-content">
        <div className="rmdb-heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={{ pathname: `/movie/${props.id}`, movieName: `${props.title}` }}>VIEW NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
