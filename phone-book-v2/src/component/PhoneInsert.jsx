import React, { useState } from "react";
import "../css/PhoneInsert.css";

const PhoneInsert = ({ insertPhoneBook }) => {
  const [name, setname] = useState("");
  const [number, setNumber] = useState("");

  const save = (e) => {
    insertPhoneBook(name, number);
    setname("");
    setNumber("");
  };
  const inputName = (e) => {
    setname(e.target.value);
  };
  const inputNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form className="phoneInsert">
      <input
        placeholder="이름을 입력하세요"
        value={name}
        onChange={inputName}
      ></input>
      <input
        placeholder="전화번호를 입력하세요"
        value={number}
        onChange={inputNumber}
      ></input>
      <button onClick={save} type="button">
        저장
      </button>
    </form>
  );
};

export default PhoneInsert;
