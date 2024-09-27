import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <h1>ABOUT TIVI</h1>
      <div className="inner">
        <div className="cont cont1">
          <div className="thumb">
            <img src={`('../../../images/About_01.png`} alt="About_01" />
          </div>
          <div className="decs">
            <h3>
              매일매일,
              <br />
              새롭게 개봉하는 수많은 영화들
            </h3>
            <p>어제 개봉한 그 영화,</p>
            <p>오늘 눈 뜨면 또 새로운 영화,</p>
            <p>또 내일 개봉한다는 기대되는 영화...</p>
          </div>
        </div>

        <div className="cont cont2">
          <div className="thumb">
            <img src={`('../../../images/About_02.png`} alt="About_02" />
          </div>
          <div className="decs">
            <h3>
              보고 싶은 영화들이
              <br />
              너무 많나요?
            </h3>
            <p></p>
          </div>
        </div>

        <div className="cont cont3">
          <div className="thumb">
            <img src={`('../../../images/About_03.png`} alt="About_03" />
          </div>
          <div className="decs">
            <h3>이제 TIVI에서 손쉽게 검색하세요.</h3>
            <p>인기 있는 영화를 한 눈에, 태그를 통한 손쉬운 검색 기능!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
