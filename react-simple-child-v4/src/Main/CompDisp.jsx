import React, { Component } from "react";

class CompDisp extends Component {
  render() {
    const { stateVar } = this.props;
    const { number } = stateVar;
    return (
      <div>
        <h2>
          {number}와 20의 합 :{Number(number) + 20}
        </h2>
        <h2>
          {" "}
          {number}의 제곱 : {number * number}
        </h2>
      </div>
    );
  }
}

export default CompDisp;
