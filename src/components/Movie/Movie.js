import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_URL, API_KEY } from "../../config";

import MovieInfo from "../elements/Info/MovieInfo";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

import "./Movie.css";



const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [runtime, setRuntime] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (localStorage.getItem(`${movieId}`)) {
      const state = JSON.parse(localStorage.getItem(`${movieId}`));
      setMovie(state.movie);
      setActors(state.actors);
      setRuntime(state.runtime);
      setDirectors(state.directors);
      setLoading(state.loading);
    } else {
      setLoading(true);
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      fetchMovieData(endpoint);
    }
  }, []);

  const fetchMovieData = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        if (result.status_code) {
          setLoading(false);
        } else {
          setMovie(result);
          const endpoint_credit = `${API_URL}movie/${props.match.params.movieId}/credits?api_key=${API_KEY}&language=en-US`;
          fetch(endpoint_credit)
            .then((result) => result.json())
            .then((result) => {
              const directors = result.crew.filter(
                (member) => member.job === "Director"
              );
              setActors(result.cast);
              setDirectors(directors);
              setLoading(false);
              localStorage.setItem(
                `${movieId}`,
                JSON.stringify({ movie, actors, directors, loading, runtime })
              );
            });
        }
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <div>
      {movie ? (
        <div>
          <MovieInfo movie={movie} directors={directors} time={movie.runtime} />
        </div>
      ) : null}

      {actors
        ? (
          <div className="rmdb-moviegrid">
            <FourColGrid header={"ACTOR"}>
              {actors.map((element, i) => {
                return <Actor key={i} actor={element} />;
              })}
            </FourColGrid>
          </div>
        )
        : null
      }

      {!actors && !loading ? <h1>No Movie Found!</h1> : null}
      {loading ? <Spinner /> : null}
    </div>
  );
};
export default Movie;
