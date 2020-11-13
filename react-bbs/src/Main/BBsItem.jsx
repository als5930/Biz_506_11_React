import React, { Component } from "react";

class BBsItem extends Component {
  render() {
    const { index, bbs } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_date_time}</td>
        <td>{bbs.b_subject} </td>
        <td>{bbs.b_content} &#9835;</td>
        <td>&times;</td>
      </tr>
    );
  }
}

export default BBsItem;
