import React from "react";
import "./Join.css";
import { Link } from "react-router-dom";

const Agreement = () => {
  const AgreeAll = () => {
    document.querySelector("#join_agree_1").click();
    document.querySelector("#join_agree_2").click();
  };
  // const Agreements = () => {
  //    if ()
  // }

  return (
    <div className="join">
      <div className="join_inner">
        <h1>AGREEMENTS</h1>
        <form>
          <div className="join_agreement">
            <ul>
              <li>
                <input type="checkbox" id="join_agree_1" />
                <label for="join_agree_1">회원가입 필수 약관 동의</label>
                <span className="join_view_more">VIEW MORE</span>
              </li>
              <li>
                <input type="checkbox" id="join_agree_2" />
                <label for="join_agree_2">개인정보 제 3자 제공 동의</label>
                <span className="join_view_more">VIEW MORE</span>
              </li>
              <li>
                <input type="checkbox" id="join_agree_3" />
                <label for="join_agree_3">광고 SMS 수신 동의</label>
                <span className="join_view_more">VIEW MORE</span>
              </li>
              <li>
                <input type="checkbox" id="join_agree_4" onClick={AgreeAll} />
                <label for="join_agree_4">필수항목 전체 동의</label>
              </li>
            </ul>
          </div>
          <Link to="/joinus">JOIN US</Link>
        </form>
      </div>
    </div>
  );
};

export default Agreement;
