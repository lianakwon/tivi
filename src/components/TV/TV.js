import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_URL, API_KEY } from "../../config";
import TVInfo from "../elements/Info/TVInfo";
import "../TV/TV.css";



const TV = (props) => {
  const [show, setShow] = useState(null);
  const [runtime, setRuntime] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showId } = useParams();

  useEffect(() => {
    if (localStorage.getItem(`${showId}`)) {
      const state = JSON.parse(localStorage.getItem(`${showId}`));
      setShow(state.show);
      setRuntime(state.runtime);
      setDirectors(state.directors);
      setLoading(state.loading);
    } else {
      setLoading(true);
      const endpoint = `${API_URL}tv/${showId}?api_key=${API_KEY}&language=en-US`;
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
          setShow(result);
          const endpoint_credit = `${API_URL}tv/${props.match.params.showId}/credits?api_key=${API_KEY}&language=en-US`;
          console.log(endpoint_credit);
          fetch(endpoint_credit)
            .then((result) => result.json())
            .then((result) => {
              const directors = result.crew.filter(
                (member) => member.job === "Director"
              );
              setDirectors(directors);
              setLoading(false);
              localStorage.setItem(
                `${showId}`,
                JSON.stringify({ show, directors, loading, runtime })
              );
            });
        }
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <div>
      {show ? (
        <div>
          <TVInfo show={show} directors={directors} time={show.runtime} />
        </div>
      ) : null}
    </div>
  );
};
export default TV;
