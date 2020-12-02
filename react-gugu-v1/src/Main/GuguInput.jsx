import React from "react";

function GuguInput(props) {
  const style = {
    fontSize: "20px",
    padding: "5px",
  };
  const [number, setNumber] = useState(1);
  const onChange = (e) => {
    setNumber(e.target.value);
    setNumberFunc(e.target.value);
  };
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="숫자"
        style={style}
        value={number}
      />
    </div>
  );
}

export default GuguInput;
