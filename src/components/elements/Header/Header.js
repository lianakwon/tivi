import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiBrightnessDown, CiDark } from "react-icons/ci";
import "./Header.css";



const Header = () => {
  const [isBrightMode, setIsBrightMode] = useState(true);

  const ModeSwitch = () => {
    setIsBrightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const elementsToToggle = [
      ".rmdb-grid",
      ".rmdb-grid-element",
      ".tag_filter",
      ".rmdb-moviethumb",
      ".rmdb-header-content",
      ".rmdb-loadmorebtn",
      ".inner",
      ".login",
      ".tag_filter",
      ".movie_info_actor",
      ".rmdb-actor-name",
      ".rmdb-actor-character",
      ".movie-grid",
      ".tv-grid",
      ".platform",
      ".join_agreement",
    ];

    document.body.classList.toggle("Light-mode", !isBrightMode);

    elementsToToggle.forEach((selector) => {
      const element = document.querySelector(selector);
      applyLightMode(element);
    });
  }, [isBrightMode]);

  const applyLightMode = (element) => {
    if (element) {
      element.classList.toggle("Light-mode", !isBrightMode);
    }
  };



  // SCROLL EVENT - HEADER
  const [headerHeight, setHeaderHeight] = useState('100px')
  const [headerOpacity, setHeaderOpacity] = useState(1)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setHeaderHeight('0px');
      setHeaderOpacity(0);
    }
    else {
      setHeaderHeight('100px');
      setHeaderOpacity(1);
    }
  };



  // LOGO CLICK - RELOAD
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div
      className="rmdb-header"
      style={{
        opacity: headerOpacity,
        height: headerHeight,
      }}
    >
      <div className="rmdb-header-content">
        <Link to="/" onClick={scrollTop}>
          <h1>TIVI</h1>
        </Link>
        <div className="header_menu">
          <ul>
            <li><Link to="/movie"><h2>MOVIE</h2></Link></li>
            <li><Link to="/tv"><h2>TV</h2></Link></li>
          </ul>
        </div>
        <div className="header_add">
          <ul>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/platform">PLATFORM</Link></li>
            <li><Link to="/notice">NOTICE</Link></li>
            <li><Link to="/login">LOG IN</Link></li>
            <li><a href="#none" onClick={ModeSwitch}>{isBrightMode ? <CiDark /> : <CiBrightnessDown />}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
