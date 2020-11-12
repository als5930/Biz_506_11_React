import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  // render 밖에서 어떤함수에서 변수를 사용하는 방법
  // 사용하고자 하는 함수내에서 보낸변수를 분해한후 사용할 준비를 해야 한다
  f1 = () => {
    const { bucketList } = this.props;
  };

  render() {
    // parent Component에서 보낸 변수를 받아서 분해한 후 사용할 준비하기
    const { bucketList, handleFlagClick, updateBucket } = this.props;
    const bItemList = bucketList.map((bucket) => {
      return (
        <BucketItem
          bucket={bucket}
          handleFlagClick={handleFlagClick}
          updateBucket={updateBucket}
          handleCancel={this.props.handleCancel}
          handleComplet={this.props.handleComplet}
        />
      );
    });

    return (
      <section className="e3-container-fluid w3-margin">
        <table className="w3-table w3-table-all">
          <tr>
            <th>FLAG &#9834;</th>
            <th>날짜 &#9834;</th>
            <th>BUCKET &#9834;</th>
            <th>완료 &#9834;</th>
            <th>취소 &#9834;</th>
          </tr>
          {bItemList}
        </table>
      </section>
    );
  }
}

export default BucketList;
