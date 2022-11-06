import React from "react";

import style from "./Todo.module.css";

const Todo = (props) => {
  const { title, desc } = props;
  console.log(props)
  return (
    <>
      <div className={style.container}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Todo;
