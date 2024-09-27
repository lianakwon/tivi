import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../elements/Header/Header";
import Footer from "../elements/Header/Footer";
import HeaderMini from "../elements/Header/HeaderMini";
import FooterMini from "../elements/Header/FooterMini";
import ScrollToTopButton from "../elements/Topbtn/ScrollToTopButton";

import TV from "../TV/TV";
import Movie from "../Movie/Movie";
import TVList from "../elements/List/TvList";
import MovieList from "../elements/List/MovieList";

import Login from "../elements/Login/Login";
import Joinus from "../elements/Login/Joinus";
import Agreement from "../elements/Login/Agreement";

import Platform from "../elements/Board/Platform";
import About from "../elements/Board/About";
import Notice from "../elements/Board/Notice";
import Notice01 from "../elements/Board/Notice01";
import Notice02 from "../elements/Board/Notice02";
import Notice03 from "../elements/Board/Notice03";
import Notice04 from "../elements/Board/Notice04";
import Notice05 from "../elements/Board/Notice05";

import NotFound from "../elements/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <HeaderMini />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/tv" element={<TVList />} />
          <Route path="/tv/:showId" element={<TV />} />

          <Route path="/login" element={<Login />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/joinus/agreement" element={<Agreement />} />

          <Route path="/about" element={<About />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/1" element={<Notice01 />} />
          <Route path="/notice/2" element={<Notice02 />} />
          <Route path="/notice/3" element={<Notice03 />} />
          <Route path="/notice/4" element={<Notice04 />} />
          <Route path="/notice/5" element={<Notice05 />} />
          <Route path="/platform" element={<Platform />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
        <FooterMini />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
