import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

import "./Home.module.css";

const todosData = [
  {
    id: uuidv4(),
    title: "read react documentation",
    desc: "react documentation might be boring but I can do it",
  },
  {
    id: uuidv4(),
    title: "do react assignment",
    desc: "react assignments might be boring but I can do it",
  },
];

const Home = () => {
  const [newTodo, setNewTodo] = useState([]);
  const onTodo = (newTodo) => {
    setNewTodo((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), newTodo }];
    });
  };
  return (
    <>
      <section>
        <NewTodo onTodo={onTodo} />
        <Todos todosData={newTodo || todosData} />
      </section>
    </>
  );
};

export default Home;
