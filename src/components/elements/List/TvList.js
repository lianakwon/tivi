import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import { Link } from "react-router-dom";

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";

import 'react-datepicker/dist/react-datepicker.css';
import "./List.css";
import './Tag.css'



const TvList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchGenre, setSearchGenre] = useState('GENRE'); const [searchGenreId, setSearchGenreId] = useState('');
  const [searchLang, setSearchLang] = useState('ENGLISH'); const [searchLangId, setSearchLangId] = useState('');
  const [searchSortType, setSsearchSortType] = useState('popularity.desc'); const [sortType, setSortType] = useState('popular');

  const goSetTagGenre = (e) => { setSearchGenre(e.target.value); setSearchGenreId(e.target.id); searchTvShows(searchGenreId); }
  const goSetTagLang = (e) => { setSearchLang(e.target.value); setSearchLangId(e.target.id); searchTvShows(searchLangId); };
  const handleSortChange = (e) => { setSortType(e.target.value); setSsearchSortType(e.target.id); searchTvShows("", "", "", "", e.target.id); };



  useEffect(() => {
    setLoading(true);
    const endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&sort_by=${searchSortType}&language=en&include_adult=false&page=1`;
    fetchTvShows(endpoint);
  }, []);



  function searchTvShows() {
    setLoading(true);
    let endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&sort_by=${searchSortType}&include_adult=false&page=1`

    // searchGenreId, searchLangId, searchOnRelease, searchOffRelease === 개중 하나라도 있을 때
    if (searchGenreId || searchLangId) {

      // BASE LINK
      endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&`

      // GENRE
      searchGenreId
        ? endpoint += `with_genres=${searchGenreId}&`
        : endpoint += ``
      console.log(endpoint);

      // LANGUGE
      searchLangId
        ? endpoint += `language=${searchLangId}&`
        : endpoint += `language=en&`

      // FINTERED RESERT
      endpoint += `sort_by=${searchSortType}&include_adult=false&page=1`;
    }

    setTvShows([]);
    fetchTvShows(endpoint);
  }



  const loadMoreItems = () => {
    const nextPage = currentPage + 1;
    let endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&sort_by=${searchSortType}&include_adult=false&page=${nextPage}`;

    // searchGenreId, searchLangId, searchOnRelease, searchOffRelease === 개중 하나라도 있을 때
    if (searchGenreId || searchLangId) {
      // BASE LINK
      endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&`;

      // GENRE
      searchGenreId !== "" && searchGenreId !== undefined
        ? (endpoint += `with_genres=${searchGenreId}&`)
        : (endpoint += ``);

      // LANGUGE
      searchLangId !== "" && searchLangId !== undefined
        ? (endpoint += `language=${searchLangId}&`)
        : (endpoint += `language=en&`);
    }

    // FINTERED RESERT
    endpoint += `sort_by=${searchSortType}&include_adult=false&page=${
      currentPage + 1
    }`;

    fetchTvShows(endpoint);
  };



  const fetchTvShows = (endpoint) => {
    // console.log(endpoint);
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        setTvShows(prevMovies => [...prevMovies, ...result.results]);
        setLoading(false);
        setCurrentPage(result.page);
        setTotalPages(result.total_pages);
      });
  };



  return (
    <div className="list-grid">
      <h1>TV</h1>

      <div className="tag_filter">
        <h3>FILTER</h3>
        <div className="tag_filter_inner">
          <div>
            <button className='pl on'>{searchGenre}</button>
            <ul className='listbox' id='listbox'>
              <li><button className='list' id="" value="GENRE" onClick={goSetTagGenre}>ALL</button></li>
              <li><button className='list' id="10759" value="Action & Adventure" onClick={goSetTagGenre}>Action & Adventure</button></li>
              <li><button className='list' id="16" value="Animation" onClick={goSetTagGenre}>Animation</button></li>
              <li><button className='list' id="35" value="Comedy" onClick={goSetTagGenre}>Comedy</button></li>
              <li><button className='list' id="80" value="Crime" onClick={goSetTagGenre}>Crime</button></li>
              <li><button className='list' id="99" value="Documentary" onClick={goSetTagGenre}>Documentary</button></li>
              <li><button className='list' id="18" value="Drama" onClick={goSetTagGenre}>Drama</button></li>
              <li><button className='list' id="10751" value="Family" onClick={goSetTagGenre}>Family</button></li>
              <li><button className='list' id="10762" value="Kids" onClick={goSetTagGenre}>Kids</button></li>
              <li><button className='list' id="9648" value="Mystery" onClick={goSetTagGenre}>Mystery</button></li>
              <li><button className='list' id="10763" value="News" onClick={goSetTagGenre}>News</button></li>
              <li><button className='list' id="10764" value="Reality" onClick={goSetTagGenre}>Reality</button></li>
              <li><button className='list' id="10765" value="Sci-Fi & Fantasy" onClick={goSetTagGenre}>Sci-Fi & Fantasy</button></li>
              <li><button className='list' id="10766" value="Soap" onClick={goSetTagGenre}>Soap</button></li>
              <li><button className='list' id="10767" value="Talk" onClick={goSetTagGenre}>Talk</button></li>
              <li><button className='list' id="10768" value="War & Politics" onClick={goSetTagGenre}>War & Politics</button></li>
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
          <div>
            <button className='pl on'>{sortType}</button>
            <ul className='listbox' id='listbox'>
              <li><button className='list' id='popularity.desc' value="POPULAR" onClick={handleSortChange}>POPULAR</button></li>
              <li><button className='list' id='first_air_date.desc' value="LATEST" onClick={handleSortChange}>LATEST</button></li>
              <li><button className='list' id='vote_average.desc' value="VOTE" onClick={handleSortChange}>RATE</button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="list-container">
        {tvShows.map((show) => (
          <div className="list-listgrid" key={show.id}>
            <div className="list-list">
              <Link to={`../tv/${show.id}`}>
                <img
                  src={
                    show.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${show.poster_path}`
                      : "./images/no_image.jpg"
                  }
                  style={{ border: '1px solid rgba(255,255,255,.2)' }}
                  alt={show.name}
                />
                <p>{show.name}</p>
                <p>{show.first_air_date}</p>
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

export default TvList;
