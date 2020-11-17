import React, { Component } from "react";
import Moment from "react-moment";

class CarItem extends Component {
  onClick = (e, id) => {
    const { onDeleteItem } = this.props;
    if (e.target.className === "delete-item") {
      if (window.confirm("삭제할까요?")) {
        onDeleteItem(id);
        return false;
      }
    }
  };

  render() {
    const { car, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{car.c_writer}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{car.c_date_start}</Moment>
        </td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{car.c_date_end}</Moment>
        </td>
        <td>{car.c_road}</td>
        <td>{car.c_cost}</td>
        <td>{car.c_spot}</td>
        <td
          className="delete-item"
          onClick={() => this.handleClick(car.c_id)}
          style={{ cursor: "pointer" }}
        >
          &times;
        </td>
      </tr>
    );
  }
}

export default CarItem;
