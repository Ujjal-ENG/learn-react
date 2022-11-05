import React from "react";
import { useState } from "react";
import "./Handiling.css";

const Handiling = () => {
  const [change, setChange] = useState("Ujjal");
  const handleChange = (e) => {
    setChange(e.target.value);
  };
  const handleRefresh = () => {
    setChange("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Give Me some text"
        className="inputfield"
        onChange={handleChange}
      />
      <p> {change}</p>
      <button onClick={handleRefresh}>Clear</button>
    </>
  );
};

export default Handiling;
