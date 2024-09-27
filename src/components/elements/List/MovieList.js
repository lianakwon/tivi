import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import { Link } from "react-router-dom";

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";

import 'react-datepicker/dist/react-datepicker.css';
import "./List.css";
import './Tag.css'



const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchGenre, setSearchGenre] = useState('GENRE'); const [searchGenreId, setSearchGenreId] = useState('');
  const [searchLang, setSearchLang] = useState('ENGLISH'); const [searchLangId, setSearchLangId] = useState('');
  const [searchSortType, setSearchSortType] = useState("popularity.desc"); const [sortType, setSortType] = useState("popular");

  const goSetTagGenre = (e) => { setSearchGenre(e.target.value); setSearchGenreId(e.target.id); searchMovies(searchGenreId); }
  const goSetTagLang = (e) => { setSearchLang(e.target.value); setSearchLangId(e.target.id); searchMovies(searchLangId); };
  const handleSortChange = (e) => { setSortType(e.target.value); setSearchSortType(e.target.id); searchMovies("", "", "", "", e.target.id); };

  useEffect(() => {
    setLoading(true);
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=${searchSortType}&language=en&include_adult=false&page=1`;
    fetchMovies(endpoint);
  }, []);


  
  function searchMovies() {
    setLoading(true);
    let endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=${searchSortType}&include_adult=false&page=1`

    // searchGenreId, searchLangId, searchOnRelease, searchOffRelease === 개중 하나라도 있을 때
    if (searchGenreId || searchLangId) {

      // BASE LINK
      endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&`

      // GENRE
      searchGenreId
        ? endpoint += `with_genres=${searchGenreId}&`
        : endpoint += ``

      // LANGUGE
      searchLangId
        ? endpoint += `language=${searchLangId}&`
        : endpoint += `language=en&`

      // FINTERED RESERT
      endpoint += `sort_by=${searchSortType}&include_adult=false&page=1`;
    }

    setMovies([]);
    fetchMovies(endpoint);
  }



  const loadMoreItems = () => {
    const nextPage = currentPage + 1;
    let endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=${searchSortType}&include_adult=false&page=${nextPage}`;

    // searchGenreId, searchLangId, searchOnRelease, searchOffRelease === 개중 하나라도 있을 때
    if (searchGenreId || searchLangId) {

      // BASE LINK
      endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&`;

      // GENRE
      searchGenreId
        ? (endpoint += `with_genres=${searchGenreId}&`)
        : (endpoint += ``);

      // LANGUGE
      searchLangId
        ? (endpoint += `language=${searchLangId}&`)
        : (endpoint += `language=en&`);
    }

    // FINTERED RESERT
    endpoint += `sort_by=${searchSortType}&include_adult=false&page=${nextPage}`;

    fetchMovies(endpoint);
  };



  const fetchMovies = (endpoint) => {
    console.log(endpoint);
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        setMovies(prevMovies => [...prevMovies, ...result.results]);
        setLoading(false);
        setCurrentPage(result.page);
        setTotalPages(result.total_pages);
      });
  };



  return (
    <div className="list-grid">
      <h1>Movie</h1>

      <div className="tag_filter">
        <h3>FILTER</h3>
        <div className="tag_filter_inner">
          <div>
            <button className='pl on'>{searchGenre}</button>
            <ul className='listbox' id='listbox'>
              <li><button className='list' id="" value="GENRE" onClick={goSetTagGenre}>ALL</button></li>
              <li><button className='list' id="28" value="Action" onClick={goSetTagGenre}>Action</button></li>
              <li><button className='list' id="12" value="Adventure" onClick={goSetTagGenre}>ADVENTURE</button></li>
              <li><button className='list' id="16" value="Animation" onClick={goSetTagGenre}>Animation</button></li>
              <li><button className='list' id="35" value="Comedy" onClick={goSetTagGenre}>Comedy</button></li>
              <li><button className='list' id="80" value="Crime" onClick={goSetTagGenre}>Crime</button></li>
              <li><button className='list' id="99" value="Documentary" onClick={goSetTagGenre}>Documentary</button></li>
              <li><button className='list' id="18" value="Drama" onClick={goSetTagGenre}>Drama</button></li>
              <li><button className='list' id="10751" value="Family" onClick={goSetTagGenre}>Family</button></li>
              <li><button className='list' id="14" value="Fantasy" onClick={goSetTagGenre}>Fantasy</button></li>
              <li><button className='list' id="36" value="History" onClick={goSetTagGenre}>History</button></li>
              <li><button className='list' id="27" value="Horror" onClick={goSetTagGenre}>Horror</button></li>
              <li><button className='list' id="10402" value="Music" onClick={goSetTagGenre}>Music</button></li>
              <li><button className='list' id="9648" value="Mystery" onClick={goSetTagGenre}>Mystery</button></li>
              <li><button className='list' id="10749" value="Romance" onClick={goSetTagGenre}>Romance</button></li>
              <li><button className='list' id="878" value="Science_Fiction" onClick={goSetTagGenre}>Science Fiction</button></li>
              <li><button className='list' id="10770" value="TV_Movie" onClick={goSetTagGenre}>TV Movie</button></li>
              <li><button className='list' id="53" value="Thriller" onClick={goSetTagGenre}>Thriller</button></li>
              <li><button className='list' id="10752" value="War" onClick={goSetTagGenre}>War</button></li>
              <li><button className='list' id="37" value="Western" onClick={goSetTagGenre}>Western</button></li>
            </ul>
          </div>
        </div>

        <div className="tag_filter_inner">
          <div>
            <button className='pl on'>{searchLang}</button>
            <ul className='listbox' id='listbox'>
              <li><button className='list' id='en' value="english" onClick={goSetTagLang}>ENGLISH</button></li>
              <li><button className='list' id='ko' value="korean" onClick={goSetTagLang}>KOREAN</button></li>
            </ul>
          </div>
        </div>

        <div className="tag_filter_inner">
          <button className='pl on'>{sortType}</button>
          <ul className='listbox' id='listbox' value={sortType}>
            <li><button className="list" id="popularity.desc" value="POPULAR" onClick={handleSortChange}>POPULAR</button></li>
            <li><button className="list" id="release_date.desc" value="LATEST" onClick={handleSortChange}>LATEST</button></li>
            <li><button className="list" id="release_date.asc" value="ORDEST" onClick={handleSortChange}>ORDEST</button></li>
            <li><button className="list" id="title.asc" value="A - Z" onClick={handleSortChange}>A - Z</button></li>
            <li><button className="list" id="title.dasc" value="Z - A" onClick={handleSortChange}>Z - A</button></li>
          </ul>
        </div>
      </div>

      <div className="list-container">
        {movies.map((movies) => (
          <div className="list-listgrid" key={movies.id}>
            <div className="list-list">
              <Link to={`/movie/${movies.id}`}>
                <img
                  src={
                    movies.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movies.poster_path}`
                      : "./images/no_image.jpg"
                  }
                  style={{ border: '1px solid rgba(255,255,255,.2)' }}
                  alt={movies.title}
                />
                <p>{movies.title}</p>
                <p>{movies.release_date}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {loading && <Spinner />}
      {currentPage <= totalPages && !loading && (
        <LoadMoreBtn text="Load More" onClick={loadMoreItems} />
      )}
    </div>
  );
};

export default MovieList;
