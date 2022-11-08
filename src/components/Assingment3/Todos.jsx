import React from "react";
import Todo from "./Todo";

import "./Todos.module.css";

const Todos = (props) => {
  console.log(props);
  return (
    <>
      <div>
        {props.todosData.map((todo) => (
          <Todo key={todo.id} {...todo && todo.newTodo} />
        ))}
      </div>
    </>
  );
};

export default Todos;
