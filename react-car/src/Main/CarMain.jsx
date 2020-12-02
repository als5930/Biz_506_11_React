import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class carMain extends Component {
  state = {
    carList: [
      {
        id: 0,
        c_writer: "엔진주유",
        c_date_start: "2020-11-17",
        c_date_end: "",
        c_road: "180,000",
        c_cost: "50,000",
        c_spot: "",
      },
    ],
  };

  onCreate = (car) => {
    console.log(car);
    const newCarList = [
      {
        c_id: car.c_id,
        c_writer: car.c_writer,
        c_date_start: car.c_date_start,
        c_date_end: car.c_date_end,
        c_road: car.c_road,
        c_cost: car.c_cost,
        c_spot: car.c_spot,
      },
    ];
    this.setState({ carList: newCarList });
  };

  onDeleteItem = (id) => {
    const deleteCarList = this.state.carList.filter((car) => {
      if (car.id !== Number(id)) return car;
    });
    this.setState({ carList: deleteCarList });
  };

  render() {
    const { carList } = this.state;
    return (
      <div>
        <CarInsert onCreate={this.onCreate} onDeleteItem={this.onDeleteItem} />
        <CarList carList={carList} />
      </div>
    );
  }
}

export default carMain;
