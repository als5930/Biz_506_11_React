import React, { Component } from "react";
import CompCountClass from "./CompCountClass";
import CompButtonClass from "./CompButtonClass";

/**
 * 클래스 type의 컴포넌트에서는 state키워드를 사용하겨
 * state 변수를 선언한다
 */
class CompBodyClass extends Component {
  state = { count: 10 };

  setCountIncrement = () => {
    // 클래스 type의 컴포넌트에서는 state변수를 변경할때
    // this.state()라는 내부의 method를 사용해야한다
    // state변수에 초기값을 지정하려면 JSON 객체형식 으로 작성
    this.setState({ count: this.state.count + 1 });
  };

  setCountDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // 클래스 type 에서 state변수를 child 컴포넌트에 전달할때
  // 변수명={this.state.state변수}
  render() {
    return (
      <div>
        <CompCountClass countArg={this.state.count} />
        <CompButtonClass
          incFunc={this.setCountIncrement}
          decFunc={this.setCountDecrement}
        />
      </div>
    );
  }
}

export default CompBodyClass;
