import React from "react";
import { useState } from "react";

import style from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });
  const { title, desc } = todo;

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
      <form action="#" className={style.formField} onSubmit={handleSubmit}>
        <div className={style.titleField}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your todo here"
            value={title}
            onChange={handleChange}
          />
        </div>

        <div className={style.descriptionField}>
          <label htmlFor="desc">Description: </label>
          <textarea
            type="text"
            id="desc"
            placeholder="Enter your todo here"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <div className="div">
          <button type="submit" className={style.btn}>
            Add Todo
          </button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
