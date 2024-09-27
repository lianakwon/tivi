import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiBrightnessDown, CiDark, CiMenuBurger } from "react-icons/ci";
import "./HeaderMini.css";



const HeaderMini = () => {
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
  const [headerHeight, setHeaderHeight] = useState('60px')
  const [headerOpacity, setHeaderOpacity] = useState(1)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 800) {
      setHeaderHeight('0px');
      setHeaderOpacity(0);
    }
    else {
      setHeaderHeight('60px');
      setHeaderOpacity(1);
    }
  };



  // LOGO CLICK - RELOAD
  const onReload = () => { window.location.replace("/"); };




  // TXD MENU
  const txdMenuOpen = () => {
    document.querySelector('#txd_menu').classList.toggle('on')
    document.querySelector('#txd_menu').classList.toggle('off')
  };
  const txdMenuClose = () => {
    document.querySelector('#txd_menu').classList.toggle('on')
    document.querySelector('#txd_menu').classList.toggle('off')
  };




  return (
    <div className="rmdb-header_mini" style={{ opacity: headerOpacity, height: headerHeight }}>
      <div className="rmdb-header-mini-content">
        <Link to="/" onClick={onReload}><h1>TV</h1></Link>
        <div className="header-mini_add">
          <ul>
            <li><a href="#none" onClick={txdMenuOpen}><CiMenuBurger /></a></li>
            <li><a href="#none" onClick={ModeSwitch}>{isBrightMode ? <CiDark /> : <CiBrightnessDown />}</a></li>
          </ul>

          <div id="txd_menu" className="off">
            <div id="txd_menu_inner">
              <Link to="/" onClick={txdMenuClose}><h1>TV</h1></Link>
              <ul>
                <li><Link to="/" onClick={txdMenuClose}>HOME</Link></li>
                <li><Link to="/movie" onClick={txdMenuClose}>MOVIE</Link></li>
                <li><Link to="/tv" onClick={txdMenuClose}>TV</Link></li>
              </ul>
              <ul>
                <li><Link to="/about" onClick={txdMenuClose}>ABOUT</Link></li>
                <li><Link to="/notice" onClick={txdMenuClose}>NOTICE</Link></li>
                <li><Link to="/platform" onClick={txdMenuClose}>PLAFORM</Link></li>
              </ul>
              <ul>
                <li><Link to="/login" onClick={txdMenuClose}>LOG IN</Link></li>
                <li><Link to="/joinus/agreement" onClick={txdMenuClose}>JOIN US</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMini;
