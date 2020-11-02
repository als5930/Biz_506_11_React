import React, { useState } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "010-1111" },
    { id: 2, name: "성춘향", number: "010-2222" },
    { id: 3, name: "홍길동", number: "010-3333" },
  ]);
  return (
    <>
      <PhoneInsert />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
