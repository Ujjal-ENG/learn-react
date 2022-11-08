import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      {console.log("rendering")}
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setisLoading(!isLoading)}>Loading</button>
    </>
  );
};

export default UseEffect;
