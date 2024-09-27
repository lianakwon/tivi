import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../config";
import "./Home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import HeroImage from "../elements/HeroImage/HeroImage";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";

import "../elements/SearchBar/SearchBar.css";
import { CiSearch } from 'react-icons/ci';



function Home() {
  const [movies, setMovies] = useState([]);
  const [heroImage_0, setHeroImage_0] = useState(null);
  const [heroImage_1, setHeroImage_1] = useState(null);
  const [heroImage_2, setHeroImage_2] = useState(null);
  const [heroImage_3, setHeroImage_3] = useState(null);
  const [heroImage_4, setHeroImage_4] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBtn, setSearchBtn] = useState("movieBtn");

  useEffect(() => {
    setLoading(true);
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&include_adult=false&language=en&page=1`;
    fetchItems(endpoint);
  }, []);



  const doSearch = (e) => {
    if (e.target.id === "multiBtn" || e.target.id === "movievBtn" || e.target.id === "tvBtn") {
      let multiBtn = document.querySelector('#multiBtn'); multiBtn.className = "searchBtnLi ";
      let movievBtn = document.querySelector('#movievBtn'); movievBtn.className = "searchBtnLi ";
      let tvBtn = document.querySelector('#tvBtn'); tvBtn.className = "searchBtnLi ";

      e.target.className = 'searchBtnLi on';
      setSearchBtn(e.target.id);
    }

    searchItems(searchTerm, searchBtn);
  };



  function searchItems(searchTerm, searchBtn) {
    let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&include_adult=false&language=en&page=1`;
    setMovies([]);
    setLoading(true);

    // default
    if (searchBtn !== 'multiBtn' && searchBtn !== 'movievBtn' && searchBtn !== 'tvBtn') {
      searchTerm
        ? endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&`
        : endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&`;

        endpoint += `include_adult=false&language=en&include_video=false&page=1`;
    }

    // BtnOn
    if (searchBtn === 'multiBtn' || searchBtn === 'movievBtn' || searchBtn === 'tvBtn') {
      searchTerm
        ? endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&`
        : endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&`;

      // TV + MV, multiBtn
      if (searchBtn === 'multiBtn') {
        searchTerm
          ? endpoint = `${API_URL}search/multi?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&`
          : endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&`;
      }
      // MV, movievBtn
      if (searchBtn === 'movievBtn') {
        searchTerm
          ? endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&`
          : endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&`;
      }
      // TV, tvBtn
      if (searchBtn === 'tvBtn') {
        searchTerm
          ? endpoint = `${API_URL}search/tv?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&`
          : endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&`;
      }

      endpoint += `include_adult=false&language=en&include_video=false&page=1`;
    };

    fetchItems(endpoint);
  };



  const loadMoreItems = () => {
    const nextPage = currentPage + 1;
    let endpoint = "";

    if (searchTerm === "") {
      switch (searchBtn) {
        case "multiBtn":
          endpoint = `${API_URL}trending/all/week?api_key=${API_KEY}&language=en-US&page=${nextPage}`;
          break;
        case "movievBtn":
          endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${nextPage}`;
          break;
        case "tvBtn":
          endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${nextPage}`;
          break;
        default:
          endpoint = `${API_URL}trending/all/week?api_key=${API_KEY}&language=en-US&page=${nextPage}`;
      }
    } else {
      switch (searchBtn) {
        case "multiBtn":
          endpoint = `${API_URL}search/multi?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&include_adult=false&language=en&include_video=false&page=${nextPage}`;
          break;
        case "movievBtn":
          endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&include_adult=false&language=en&include_video=false&page=${nextPage}`;
          break;
        case "tvBtn":
          endpoint = `${API_URL}search/tv?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&include_adult=false&language=en&include_video=false&page=${nextPage}`;
          break;
        default:
          endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&sort_by=popularity.desc&include_adult=false&language=en&include_video=false&page=${nextPage}`;
      }
    }
    fetchItems(endpoint);
    console.log("Endpoint URL", endpoint);
  };



  const fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        setMovies(prevMovies => [...prevMovies, ...result.results]);
        setHeroImage_0(heroImage_0 || result.results[0]);
        setHeroImage_1(heroImage_1 || result.results[1]);
        setHeroImage_2(heroImage_2 || result.results[2]);
        setHeroImage_3(heroImage_3 || result.results[3]);
        setHeroImage_4(heroImage_4 || result.results[4]);

        setLoading(false);
        setCurrentPage(result.page);
        setTotalPages(result.total_pages);
      });
  };



  return (
    <div className="rmdb-home">
      <Carousel axis='horizontal' transitionTime='5s' emulateTouch={true} swipeable={true} controlArrow={false} autoPlay={true} infiniteLoop={true}>
        <div>
          {heroImage_0 ? (
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage_0.backdrop_path}`} className='mainBn_0'
              title={heroImage_0.original_title} text={heroImage_0.overview} id={heroImage_0.id}
            />
          ) : null}
        </div>
        <div>
          {heroImage_1 ? (
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage_1.backdrop_path}`} className='mainBn_1'
              title={heroImage_1.original_title} text={heroImage_1.overview} id={heroImage_1.id}
            />
          ) : null}
        </div>
        <div>
          {heroImage_2 ? (
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage_2.backdrop_path}`} className='mainBn_2'
              title={heroImage_2.original_title} text={heroImage_2.overview} id={heroImage_2.id}
            />
          ) : null}
        </div>
        <div>
          {heroImage_3 ? (
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage_3.backdrop_path}`} className='mainBn_3'
              title={heroImage_3.original_title} text={heroImage_3.overview} id={heroImage_3.id}
            />
          ) : null}
        </div>
        <div>
          {heroImage_4 ? (
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage_4.backdrop_path}`} className='mainBn_4'
              title={heroImage_4.original_title} text={heroImage_4.overview} id={heroImage_4.id}
            />
          ) : null}
        </div>
      </Carousel>

      <div className="rmdb-home-grid">
        <div className="rmdb-searchbar">
          <div className="rmdb-searchbar-content">
            <CiSearch />
            <input
              type="text"
              id="searchbar"
              className="rmdb-searchbar-input"
              placeholder="Search Videos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { doSearch(e); console.log('enter'); } }}
            />
            <ul className="searchBtn">
              <li><a href="#none" id="movievBtn" className="searchBtnLi on" onClick={(e) => doSearch(e)}>MOVIE</a></li>
              <li><a href="#none" id="tvBtn" className="searchBtnLi " onClick={(e) => doSearch(e)}>TV</a></li>
              <li><a href="#none" id="multiBtn" className="searchBtnLi" onClick={(e) => doSearch(e)}>ALL</a></li>
            </ul>
          </div>
        </div>

        <FourColGrid loading={loading} >
          {movies.map((element, i) => (
            <MovieThumb
              image={
                element.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                  : "./images/no_image.jpg"
              }
              key={i}
              clickable={true}
              movieId={element.id} movieName={element.original_title || element.name}
              movieDate={element.release_date || element.first_air_date}
              linkto={ element.original_title ? 'movie' : 'tv' }
            />
          ))}
        </FourColGrid>
        {loading ? <Spinner /> : null}
        {currentPage <= totalPages && !loading ? (
          <LoadMoreBtn text="Load More" onClick={loadMoreItems} />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
