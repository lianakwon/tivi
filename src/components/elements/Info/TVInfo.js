import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import TVThumb from "../TVThumb/TVThumb";
import "./TVInfo.css";

const TVInfo = props => {
  return (
    <div className="rmdb-tvinfo">
      <div className="rmdb-tvinfo-img" style={{ background: props.show.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.show.backdrop_path}')` : "#000" }}></div>
      <div className="rmdb-tvinfo-blur"></div>
      <div className="rmdb-tvinfo-content">
        <div className="rmdb-tvinfo-thumb">
          <TVThumb image={props.show.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.show.poster_path}` : "./images/no_image.jpg"} clickable={false} />
        </div>
        <div className="rmdb-tvinfo-text">
          <h1>{props.show.name}</h1><p>{props.show.overview}</p>
          {props.directors.length > 1 ? (<h3>DIRECTORS</h3>) : (<h3>DIRECTOR</h3>)}{" "}
          {props.directors.map((element, i) => { return (<p key={i} className="rmdb-director">{element.name}</p>); })}
          <h3>POPULARITY</h3><p>{props.show.vote_average}</p>
          <h3>RELEASE DATE</h3><p>{props.show.first_air_date}</p>
          <a href="/">GO</a>
        </div>
      </div>
    </div>
  );
};

export default TVInfo;
