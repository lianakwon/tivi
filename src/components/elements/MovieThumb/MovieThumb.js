import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = props => {
  return (
    <div className="rmdb-moviethumb">
      {props.clickable ? (
        <Link to={{ pathname: `/${props.linkto}/${props.movieId}`, movieName: `${props.movieName}` }} >
          <img src={props.image} alt="moviethumb" />
          <div className="decs">
            <p>{props.movieName}</p>
            <p>{props.movieDate}</p>
          </div>
        </Link>
      ) : (
        <span>
          <img src={props.image} alt="moviethumb" />
          <div className="decs">
            <p>{props.movieName}</p>
            <p>{props.movieDate}</p>
          </div>
        </span>
      )
      }
    </div >
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string
};

export default MovieThumb;
