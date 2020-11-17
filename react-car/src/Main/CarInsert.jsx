import React, { Component } from "react";
import "../css/CarInsert.css";

class CarInsert extends Component {
  state = {
    c_weiter: "",
    c_date_start: "",
    c_date_end: "",
    c_road: "",
    c_cost: "",
    c_spot: "",
    c_id: 0,
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCreate = (e) => {
    const { onCreate } = this.props;
    onCreate({
      c_weiter: this.state.c_weiter,
      c_date_start: this.state.c_date_start,
      c_date_end: this.state.c_date_end,
      c_road: this.state.c_road,
      c_cost: this.state.c_cost,
      c_spot: this.state.c_spot,
      c_id: this.state.c_id,
    });
  };

  render() {
    const { c_date_start, c_date_end, c_road, c_cost, c_spot } = this.state;
    return (
      <div className="input-form">
        <input
          name="c_date_start"
          value={c_date_start}
          onChange={this.handleOnChange}
          placeholder="시작시간"
        />
        <input
          name="c_date_end"
          value={c_date_end}
          onChange={this.handleOnChange}
          placeholder="종료시간"
        />

        <input
          name="c_road"
          value={c_road}
          onChange={this.handleOnChange}
          placeholder="현재거리"
        />
        <input
          name="c_cost"
          value={c_cost}
          onChange={this.handleOnChange}
          placeholder="소요비용"
        />
        <input
          name="c_spot"
          value={c_spot}
          onChange={this.handleOnChange}
          placeholder="장소"
        />
        <button onClick={this.onCreate} style={{ cursor: "pointer" }}>
          저장
        </button>
      </div>
    );
  }
}

export default CarInsert;
