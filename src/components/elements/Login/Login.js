import React from "react"
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
   const onKeypressEnter = (e) => {
      if (e.key === 'Enter') {
         if (e.target.placeholder === "ID") {
            e.preventDefault();
            if (e.target.value !== "") {
               document.querySelector("input[placeholder='PW']").focus();
            } else {
               document.querySelector("input[placeholder='ID']").focus();
            }
         } else if (e.target.placeholder === "PW") {
            if (e.target.value !== "") {
               document.querySelector("#submit").click();
            } else {
               document.querySelector("input[placeholder='PW']").focus();
            }
         }
      }
   };

   const loginSubmit = (e) => {
      if (
         document.querySelector("input[placeholder='ID']") !== ''
         && document.querySelector("input[placeholder='PW']").value !== ''
      ) {
         // console.log("go");
         e.preventDefault;
         alert('로그인 완료!');
         window.location = '/';
      };
   };

   

   return (
      <div className="login">
         <div className="login_inner">
            <h1>LOG IN</h1>
            <form>
               <input type="text" placeholder="ID" onKeyDown={onKeypressEnter} onKeyUp={e => { e.preventDefault() }} />
               <input type="password" placeholder="PW" onKeyDown={onKeypressEnter} onKeyUp={e => { e.preventDefault() }} />
               <div className="login_auto">
                  <input type="checkbox" id="login_auto" />
                  <label for="login_auto"> AUTO LOG-IN</label>
               </div>
               <div className="login_sns">
                  <ul>
                     <li><Link to="#none" className="naver">NAVER</Link></li>
                     <li><Link to="#none" className="kakao">KAKAO</Link></li>
                     <li><Link to="#none" className="google">G</Link></li>
                  </ul>
               </div>
               <Link to="" id="submit" onClick={loginSubmit}>LOG IN</Link>
               <p>DIDN'T YOU JOIN US? <Link to="/joinus/agreement">GO TO JOIN US</Link></p>
            </form>
         </div>
      </div>
   )
};

export default Login;