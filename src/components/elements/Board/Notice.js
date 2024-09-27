import React from "react";
import "./Notice.css";
import NoticeList from './NoticeList'
import { Link } from "react-router-dom";

const Notice = () => {
  
  return (
    <div id="notice">
      <h1>Notice</h1>
      <div className="inner">
        <ul>
          {NoticeList.map(({ id, url, title, date }) => (
            <li key={id}>
              <Link to={url}>
                <div className="left">
                  <h3>{title}</h3>
                </div>
                <div className="right">
                  <p>{date}</p>
                  <button type="button">VIEW MORE</button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notice;
