import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./TVThumb.css";

const TVThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable ? (
        <Link to={{ pathname: `/movie/${props.showId}`, showName: `${props.showName}` }} >
          <img src={props.image} alt="moviethumb" />
          <div className="decs">
            <p>{props.showName}</p>
            <p>{props.showDate}</p>
          </div>
        </Link>
      ) : (
        <span>
          <img src={props.image} alt="showthumb" />
          <div className="decs">
            <p>{props.showName}</p>
            <p>{props.showDate}</p>
          </div>
        </span>
      )
      }
    </div >
  );
};

TVThumb.propTypes = {
  image: PropTypes.string,
  showId: PropTypes.number,
  showName: PropTypes.string
};

export default TVThumb;
