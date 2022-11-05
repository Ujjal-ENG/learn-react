import React from "react";
import "./Todo.css";
const Todo = (props) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString(props.locales);

  return (
    <>
      <div className="card">
        <h3>{props.name}</h3>
        <p>{props.details}</p>
        <h4>{`${day}/${month}/ ${year}`}</h4>
        <p>Time: { time }</p>
      </div>
    </>
  );
};

export default Todo;
