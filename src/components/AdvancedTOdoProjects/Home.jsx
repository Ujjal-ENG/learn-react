import React from "react";
import Todos from "./Todos";

import style from "./Home.module.css";
import NewTodo from "./NewTodo";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

// const dummyTodos = [
//   {
//     id: 1,
//     title: "todo title 1",
//     desc: "todo1 description is here...",
//   },
//   {
//     id: 2,
//     title: "todo title 2",
//     desc: "todo1 description is here...",
//   },
//   {
//     id: 3,
//     title: "todo title 3",
//     desc: "todo1 description is here...",
//   },
// ];

const Home = () => {
  const [newTodo, setNewTodo] = useState([]);

  const onTodo = (newTodo) => {
    console.log(newTodo);
    setNewTodo((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), newTodo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setNewTodo((prevTodos) => {
      const filtererdTOdos = prevTodos.filter((todo) => todo.id !== id);
      return filtererdTOdos;
    });
  };
  return (
    <>
      <div className={style.container}>
        <h1 style={{ color: "white", fontSize: "80px", letterSpacing: "10px" }}>
          Todo App
        </h1>

        <NewTodo onTodo={onTodo} />
        <Todos todos={newTodo} onRemoveTodo={handleRemoveTodo} />
      </div>
    </>
  );
};

export default Home;
