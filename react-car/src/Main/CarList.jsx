import React, { Component } from "react";
import "../css/CarList.css";
import CarItem from "./CarItem";
class CarList extends Component {
  render() {
    const { carList } = this.props;
    const carItemList = carList.map((car, index) => (
      <CarItem key={car.id} index={index} car={car} />
    ));
    return (
      <table className="car-list">
        {" "}
        <thead>
          <tr>
            <th>No &#9834;</th>
            <th>구분 &#9834;</th>
            <th>시작 일시 &#9834;</th>
            <th>종료 일시 &#9834;</th>
            <th>현재 거리 &#9834;</th>
            <th>소용비용 &#9834;</th>
            <th>장소 &#9834;</th>
            <th>&hearts;</th>
          </tr>
        </thead>
        <tbody>{carItemList}</tbody>
      </table>
    );
  }
}

export default CarList;
