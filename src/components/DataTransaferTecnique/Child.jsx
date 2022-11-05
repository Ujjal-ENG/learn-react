import React from "react";

const Child = (props) => {
  const data = "I am from child";

  props.onChildData(data)
  
  return (
    <>
      <h1>I am Child Component</h1>
      <h2>{props.data}</h2>
    </>
  );
};

export default Child;
