import React, { useState, useRef } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "이몽룡", number: "010-1111" },
    { id: 2, name: "성춘향", number: "010-2222" },
    { id: 3, name: "홍길동", number: "010-3333" },
  ]);

  const onClickSave = (name, number) => {
    //window.alert("버튼이클릭됨");
    setPhoneBook([
      ...phoneBook,
      { id: phoneId.current++, name: { name }, number: { number } },
    ]);
  };
  /*
  useRet(초기값) 함수를 사용하여 Ref객체를 선언하면
  current라는 속성이 자동으로 생성되고 초기화 된다
  변수,current속성은 state 변수와 달리 아무곳에서나 변수 값을 수정할수 있다
  Ref 객체는 값이 변경이 되더라도 React에서 재 rendering 하지 않는다
  */
  const phoneId = useRef(4);

  /*
  child Component에 변수 와 함수 전달하기 
  변수와 함수를 전달하는 방법은 같은방법으로 하면 된다
  전달할 변수=(값) 전달할이름=(함수이름)

  facade 패턴, React패턴
  parent Component에서 선언된 state 변수를 child로 전달을 하게되면
  child에서는 ReadOnly 상태가 되어 변수를 변경할수 없다
  변수를 변경하려면 변경하는 함수를 전달하고 그함수를 전달하고 그 함스 실행하도록 코딩
  */
  return (
    <>
      <PhoneInsert onClickSave={onClickSave} />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
