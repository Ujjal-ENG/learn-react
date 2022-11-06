import React, { useState } from "react";

import style from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <>
      <h1>Collect Data from a Form</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div className={style.title}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={props.todo}
            onChange={handleChange}
          />
        </div>
        <div className={style.desc}>
          <label htmlFor="desc">Description: </label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={props.todo}
            onChange={handleChange}
          />
        </div>
        <div className={style.btn}>
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
