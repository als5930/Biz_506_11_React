import React from "react";

function GuguList2(number) {
  const gugus = Array(9).fill(0);
  const guguMaps = gugus.map((item, index) => {
    return (
      <div>
        {number} x {index + 1} = {number * (index + 1)}
      </div>
    );
  });
  return <div>{guguMaps}</div>;
}

export default GuguList2;
