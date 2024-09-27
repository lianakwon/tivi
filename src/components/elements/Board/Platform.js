import React from "react";
import "./Platform.css";
import { Link } from "react-router-dom";

const Platform = () => {
  const platformList = [
    {
      id: "1",
      title: "NETFLIX",
      monthly: "0.00",
      yearly: "0.00",
      text: "details...",
      date: "2010",
      src: String("../../../images/Platform_01.jpg"),
      url: "https://www.netflix.com/",
    },
    {
      id: "2",
      title: "TIVING",
      monthly: "0.00",
      yearly: "0.00",
      text: "details...",
      date: "2010",
      src: String("../../../images/Platform_02.jpg"),
      url: "https://www.tving.com/",
    },
    {
      id: "3",
      title: "DISNEY+",
      monthly: "0.00",
      yearly: "0.00",
      text: "details...",
      date: "2019",
      src: String("../../../images/Platform_05.jpg"),
      url: "https://www.disneyplus.com/",
    },
    {
      id: "4",
      title: "COUPANG PLAY",
      monthly: "0.00",
      yearly: "0.00",
      text: "details...",
      date: "2021",
      src: String("../../../images/Platform_04.png"),
      url: "https://www.coupangplay.com/",
    },
    {
      id: "5",
      title: "WAVVE",
      monthly: "0.00",
      yearly: "0.00",
      text: "details...",
      date: "2019",
      src: String("../../../images/Platform_03.jpg"),
      url: "https://www.wavve.com/",
    },
  ];

  return (
    <div className="platform">
      <h1>Platform</h1>
      <div className="inner">
        <ul>
          {platformList.map(({ id, url, src, monthly, yearly, title, text, date }) => (
            <li key={id}>
              <Link to={url}>
                <div className="gradient"></div>
                <img src={src} alt={title} width="100%" className="thumb" />
                <div className="decs">
                  <h3>{title}</h3>
                  <div>
                    <p><strong>$ {monthly} </strong> for a month</p>
                    <p><strong>$ {yearly} </strong> for a year</p>
                    <p>since {date}</p>
                  </div>
                  <button type="button">VIEW DETAIL</button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Platform;
