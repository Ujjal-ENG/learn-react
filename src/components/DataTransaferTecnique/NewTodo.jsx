import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);

  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          id="text"
          placeholder="Enter your todo"
          required
          onChange={handleChange}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
