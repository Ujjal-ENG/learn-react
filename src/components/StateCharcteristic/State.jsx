import React from "react";
import { useState } from "react";
import './State.css'

const State = () => {
  const [count, setCount] = useState(0);
  const handleCliked = () => setCount(count + 1);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCliked}>Increment</button>

      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0 ? true : false}
      >Decrement</button>
    </>
  );
};

export default State;
