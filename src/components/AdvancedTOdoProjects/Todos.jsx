import React from "react";
import Todo from "./Todo";

import style from "./Todos.module.css";

const Todos = (props) => {
  // console.log(props.todos);
  return (
    <>
      <section className={style.todos}>
        {props.todos.map((todo) => (
          <Todo
            key={Math.random()}
            todo={todo.newTodo}
            id={todo.id}
            onRemoveTodo={props.onRemoveTodo}
          />
        ))}
      </section>
    </>
  );
};

export default Todos;
