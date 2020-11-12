import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  /**
   * id 변수는 state가 아닌 일반형 변수이다
   * 일반형변수는 코드내에서 자유롭게 값을 변경하여
   * 사용할수 있고
   * 여기서는 bucketList의 b_id값의 PK값을 만들기 위해 사용한다
   */

  id = 1;
  // react에서는 state형 변수는 절대 직접 변경하지 않는다
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_start_date: "2020-11-12",
        b_title: "리엑트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancel: false,
      },
      {
        b_id: 1,
        b_flag: 1,
        b_start_date: "2020-11-12",
        b_title: "제주도 여행가기",
        b_end_date: "2010-11-12",
        b_end_check: true,
        b_cancel: false,
      },
    ],
  };

  /**
   * 프록시 : 사용자가 알지못하는 상황에서 어떤데이터를 감시하거나 어떤 변화를 감시하고 있다가
   * 그것을 rendering 을 하거나 어떤행위를 하게하는것
   * rendering 어떤데이터가 있으면 사용자를 보여주기위해 (화면)그려준다
   * Lift Cycle Method
   * React의 Class ytpe Component에는 여러가지 내장 method가 있다
   * 데이터의 변화가 발생하면 정해진  순서에 따라 내장 method가 실행되면서
   * 화면을 rendering 한다
   * 이러한 method 들을 Life Cycle Method라고 한다
   */

  // 화면이  이미 완성된 상태에서 데이터가 변화 했을떄  reendering하려고 할때 실행되는 method
  //insert, update, delete 되었을때 실행될 메서드
  // 실제 DB와 연동을 하면 이 method에서 AJAX로 서버에 전송하고 서버에는 CRUD를 수행한다
  // 이 메서드가 React에 의해 호출될때
  // state변수의 변화를 감지할수 있다
  // state변수에 변화가 있어서 화면이 rendering 될때
  // 변화되기 이전 데이터가 pre**매개변수에 담겨서 전달이 된다
  // 이 데이터와 현재 데이터를 비교하여 달라졌을 경우
  // DB에 저장하거나 하는일을 수행하여 효율을 높일 수 있다
  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);
    if (preString !== thisString) {
      localStorage.setItem("bucketList", thisString);
    }
  }

  //현재 컴포넌트가 마운트 모두 마운트가 되고
  // redering이 되기 바로 직전에 호출되는 method
  // 서버로부터 데이터를 요청하여 가져오는 코드를 추가
  componentDidMount() {
    const loadBucketList = localStorage.getItem("bucketList"); //String
    // 문자열일 경우 null, "" 이 아니면 논리적으로 true가 된다
    if (loadBucketList) {
      const jsonBucketList = JSON.parse(loadBucketList);
      this.setState({ bucketList: jsonBucketList });
      this.id = jsonBucketList.length;
    }
  }

  BucketInsert = (bucket_title) => {
    const date = new Date();
    const bucket = {
      d_id: ++this.id,
      b_flag: 9,
      b_start_date: date.toString(),
      b_title: bucket_title,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    //일반적인 JS코드에서
    // bucketList.push(bucket)
    // react의 선언적 철학
    // 절대 state형 변수는 직접 변경하지 말라!!
    //this.setState({ bucketList: this.state.bucketList.concat({ ...bucket }) });
    //
    // 전개연산자를 사용하는 방법
    this.setState({ bucketList: [...this.state.bucketList, bucket] });
  };

  /**
   * class Component에서 child Component에 state형 변수를 보낼때는
   * 보낼 변수명={this.state.변수}
   *
   * 함수를 보낼때
   * 보낼 함수명={this.함수명}
   */

  render() {
    return (
      <div>
        <p>
          <BucketInsert BucketInsert={this.BucketInsert} />
        </p>
        <p>
          <BucketList bucketList={this.state.bucketList} />
        </p>
      </div>
    );
  }
}

export default BucketMain;
