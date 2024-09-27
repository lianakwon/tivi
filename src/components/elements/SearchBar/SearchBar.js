import React, { useState } from "react";
import { CiSearch } from 'react-icons/ci'
import "./SearchBar.css";



const SearchBar = ({ callback }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBtn, setSearchBtn] = useState("movieBtn");

  const doSearch = (e) => {
    if (e.key === 'enter') {
      setSearchTerm(e.target.value);
      console.log(searchTerm);
    };

    if (e.target.id === "multiBtn" || e.target.id === "movievBtn" || e.target.id === "tvBtn") {
      let multiBtn = document.querySelector('#multiBtn');
      let movievBtn = document.querySelector('#movievBtn');
      let tvBtn = document.querySelector('#tvBtn');
      multiBtn.className = "searchBtnLi ";
      movievBtn.className = "searchBtnLi ";
      tvBtn.className = "searchBtnLi ";

      e.target.className = 'searchBtnLi on';
      setSearchBtn(e.target.id);
    }
    
    callback(searchTerm, searchBtn);
  };



  return (
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
          onKeyDown={(e) => doSearch(e)}
        />
        <ul className="searchBtn">
          <li><a href="#none" id="movievBtn" className="searchBtnLi " onClick={(e) => doSearch(e)}>MOVIE</a></li>
          <li><a href="#none" id="tvBtn" className="searchBtnLi " onClick={(e) => doSearch(e)}>TV</a></li>
          <li><a href="#none" id="multiBtn" className="searchBtnLi on" onClick={(e) => doSearch(e)}>ALL</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
