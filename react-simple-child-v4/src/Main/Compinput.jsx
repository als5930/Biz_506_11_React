import React, { Component } from "react";

class Compinput extends Component {
  state = { inputValue: "0" };

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
    this.props.setStateFunc(e.target.value);
  };

  render() {
    const Style = {
      fontSize: "20px",
      padding: "5px",
    };
    return (
      <div>
        <input
          style={Style}
          placeholder="숫자를 입력하세요"
          onChange={this.onChange}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default Compinput;
