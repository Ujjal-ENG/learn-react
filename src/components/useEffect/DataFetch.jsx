import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [Todos, setTodos] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadingMessage = <p>Data is Loading....</p>;

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          if (!response.ok) {
            throw Error("Fetching is not Successful");
          } else {
            return response.json();
          }
        })

        .then((json) => {
          setTodos(json);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  
  return (
    <>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {Array.isArray(Todos)
        ? Todos.map((todo) => {
            return <p key={Math.random()}>{todo.title}</p>;
          })
        : null}
    </>
  );
};

export default DataFetch;
