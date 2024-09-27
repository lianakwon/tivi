import React, { useState } from "react"
import './Join.css'
import { Link } from "react-router-dom";

const Joinus = () => {

   // KEY-PRESS EVENT
   const onKeypressEnter = (e) => {
      // 엔터 키 입력 시 다음 칸으로 이동, 마지막 칸에서는 회원가입 버튼 클릭
      if (e.key === 'Enter') {
         if (e.target.placeholder === "ID") {
            e.preventDefault();
            if (e.target.value !== "") { document.querySelector("input[placeholder='PW']").focus(); }
            else { document.querySelector("input[placeholder='ID']").focus(); }

         } else if (e.target.placeholder === "PW") {
            e.preventDefault();
            if (e.target.value !== "") { document.querySelector("input[name='first_name']").focus(); }
            else { document.querySelector("input[placeholder='PW']").focus(); }

         } else if (e.target.name === "first_name") {
            e.preventDefault();
            if (e.target.value !== "") { document.querySelector("input[name='last_name']").focus(); }
            else { document.querySelector("input[name='first_name']").focus(); }

         } else if (e.target.name === "last_name") {
            e.preventDefault();
            if (e.target.value !== "") { document.querySelector("input[name='first_number']").focus(); }
            else { document.querySelector("input[name='last_name']").focus(); }

         } else if (e.target.name === "first_number") {
            e.preventDefault();
            if (e.target.value.length > 2) { document.querySelector("input[name='second_number']").focus(); }
            else { document.querySelector("input[name='first_number']").focus(); }

         } else if (e.target.name === "second_number") {
            e.preventDefault();
            if (e.target.value.length > 3) { document.querySelector("input[name='last_number']").focus(); }
            else { document.querySelector("input[name='second_number']").focus(); }

         } else if (e.target.name === "last_number") {
            if (e.target.value.length > 3) { joinusSubmit(e); }
            else { document.querySelector("input[name='last_number']").focus(); }
         }
      }
      // NUMBER - 3자리 이상 입력하면 다음 칸으로 넘어가서 입력, 백스페이스/딜리트 제외
      if (e.target.value.length >= 3) {
         if (e.target.name === "first_number") { if (e.key === "Backspace" || e.key === "Delete") { return false; } else { document.querySelector("input[name='second_number']").focus(); } }
      };
      // NUMBER - 4자리 이상 입력하면 다음 칸으로 넘어가서 입력, 백스페이스/딜리트 제외
      if (e.target.value.length >= 4) {
         if (e.target.name === "second_number") { if (e.key === "Backspace" || e.key === "Delete") { return false; } else { document.querySelector("input[name='last_number']").focus(); } }
         if (e.target.name === "last_number") { if (e.key === "Backspace" || e.key === "Delete") { return false; } };
      };
      // NUMBER - 0자리일 때 백스페이스/딜리트 누르면 이전 칸으로
      if (e.target.value.length === 0) {
         if (e.target.name === "second_number") { if (e.key === "Backspace" || e.key === "Delete") { document.querySelector("input[name='first_number']").focus(); } };
         if (e.target.name === "last_number") { if (e.key === "Backspace" || e.key === "Delete") { document.querySelector("input[name='second_number']").focus(); } };
      };
   };

   const joinusSubmit = (e) => {
      e.preventDefault();
      if (
         document.querySelector("input[placeholder='ID']") === ''
         || document.querySelector("input[placeholder='PW']").value === ''
         || document.querySelector("input[name='first_name']").value === ''
         || document.querySelector("input[name='last_name']").value === ''
         || document.querySelector("input[name='first_number']").value === ''
         || document.querySelector("input[name='second_number']").value === ''
         || document.querySelector("input[name='last_number']").value === ''
      ) {
         // 버튼 비활성화
         if (document.querySelector("input[placeholder='ID']").value === '') { document.querySelector("input[placeholder='PW']").focus(); alert('ID를 입력해주세요.'); }
         else if (document.querySelector("input[placeholder='PW']").value === '') { document.querySelector("input[placeholder='PW']").focus(); alert('PW를 입력해주세요.'); }
         else if (document.querySelector("input[name='first_name']").value === '') { document.querySelector("input[name='first_name']").focus(); alert('이름을 입력해주세요.'); }
         else if (document.querySelector("input[name='last_name']").value === '') { document.querySelector("input[name='last_name']").focus(); alert('이름을 입력해주세요.'); }
         else if (document.querySelector("input[name='first_number']").value === '') { document.querySelector("input[name='first_number']").focus(); alert('전화번호를 입력해주세요.'); }
         else if (document.querySelector("input[name='second_number']").value === '') { document.querySelector("input[name='second_number']").focus(); alert('전화번호를 입력해주세요.'); }
         else if (document.querySelector("input[name='last_number']").value === '') { document.querySelector("input[name='last_number']").focus(); alert('전화번호를 입력해주세요.'); }
      }
      if (
         document.querySelector("input[placeholder='ID']") !== ''
         && document.querySelector("input[placeholder='PW']").value !== ''
         && document.querySelector("input[name='first_name']").value !== ''
         && document.querySelector("input[name='last_name']").value !== ''
         && document.querySelector("input[name='first_number']").value !== ''
         && document.querySelector("input[name='second_number']").value !== ''
         && document.querySelector("input[name='last_number']").value !== ''
      ) {
         alert('회원가입 완료!');
         window.location = '/';
      }
   }



   // INPUT CHANGE - WARNING
   const [errorMessageid, setErrorMessageid] = useState("");
   const [errorMessagepw, setErrorMessagepw] = useState("");
   const [errorMessagename, setErrorMessagename] = useState("");
   const [errorMessagenumber, setErrorMessagenumber] = useState("");

   // ID : 영소문자 + 숫자 : 6~20자
   const handleIdInputChange = (e) => {
      const inputValue = e.target.value;
      const isValidId = (ID) => {
         const idRegex = /^[a-z]+[a-z0-9]{5,12}$/g;
         return idRegex.test(ID);
      };

      // 입력값이 비어 있거나 정규식에 맞으면 errorMessageid 초기화
      if (inputValue === "" || isValidId(inputValue)) { setErrorMessageid(""); }
      else { setErrorMessageid("· 아이디는 6자 이상의 영소문자, 숫자를 포함해야 합니다."); }
   };

   // PW : 영대문자 + 영소문자 + 숫자 :: 최소 8자
   const handlePwInputChange = (e) => {
      const inputValue = e.target.value;
      const isValidPassword = (PASSWORD) => {
         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
         return passwordRegex.test(PASSWORD);
      };

      // 입력값이 비어 있거나 정규식에 맞으면 errorMessageid 초기화
      if (inputValue === "" || isValidPassword(inputValue)) { setErrorMessagepw(""); }
      else { setErrorMessagepw("· 비밀번호는 8자 이상의 대문자, 소문자, 숫자를 포함해야 합니다."); }
   };

   // NAME : 영문대소문자
   const handleNameInputChange = (e) => {
      const inputValue = e.target.value;
      const isValidName = (NAME) => {
         const engRegex = /^[a-zA-Z]*$/;
         return engRegex.test(NAME);
      };

      // 입력값이 비어 있거나 정규식에 맞으면 errorMessageid 초기화
      if (inputValue === "" || isValidName(inputValue)) { setErrorMessagename(""); }
      else { setErrorMessagename("이름은 영문으로 작성해주세요."); }
   };

   // PHONE : 숫자 :: 3-4자
   const handlenumberInputChange = (e) => {
      const inputValue = e.target.value;
      const isValidNumber = (number) => {
         const numberRegex = /^([0-9]{0,4})$/;
         return numberRegex.test(number);
      };

      // 입력값이 4자 이상이면 더이상 값이 입력되지 않도록
      if (e.target.value.length > 4) { console.log("4"); e.target.value = e.target.value.slice(0, 4); }

      // 입력값이 비어 있거나 정규식에 맞으면 errorMessagenumber 초기화
      if (inputValue === "" || isValidNumber(inputValue)) { setErrorMessagenumber(""); }
      else { setErrorMessagenumber("전화번호는 숫자 3-4자리로 입력해주세요."); };
   };



   // RETURN
   return (
      <div className="join">
         <div className="join_inner">
            <h1>JOIN US</h1>
            <form>
               <input type="text" placeholder="ID" onKeyDown={onKeypressEnter} onChange={handleIdInputChange} />
               {errorMessageid ? (<p className="error-message id">{errorMessageid}</p>) : (<p className="error-message"> </p>)}
               <input type="password" placeholder="PW" onKeyDown={onKeypressEnter} onChange={handlePwInputChange} />
               {errorMessagepw ? (<p className="error-message pw">{errorMessagepw}</p>) : (<p className="error-message"> </p>)}
               <div className="flex">
                  <input type="text" name="first_name" placeholder="FIRST NAME" onKeyDown={onKeypressEnter} onChange={handleNameInputChange} />
                  <input type="text" name="last_name" placeholder="LAST NAME" onKeyDown={onKeypressEnter} onChange={handleNameInputChange} />
                  {errorMessagename ? (<p className="error-message nm">{errorMessagename}</p>) : (<p className="error-message"> </p>)}
               </div>
               <div className="flex2">
                  <input type="text" name="first_number" placeholder="000" onKeyDown={onKeypressEnter} onChange={handlenumberInputChange} />
                  <input type="text" name="second_number" placeholder="0000" onKeyDown={onKeypressEnter} onChange={handlenumberInputChange} />
                  <input type="text" maxLength='4' name="last_number" placeholder="0000" onKeyDown={onKeypressEnter} onChange={handlenumberInputChange} />
                  {errorMessagenumber ? (<p className="error-message pn">{errorMessagenumber}</p>) : (<p className="error-message"> </p>)}
               </div>
               <Link to='/' id="submit" onClick={joinusSubmit} >JOIN US</Link>
            </form>
         </div>
      </div>
   )
};

export default Joinus;