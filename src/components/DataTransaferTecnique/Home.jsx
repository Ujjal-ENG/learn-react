import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const dummyTodos = ["todo1", "todo2"];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <NewTodo onTodo={handleTodo} />
      <Todos todos={todos} />
    </>
  );
};

export default Home;
