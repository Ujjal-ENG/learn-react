import React from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>Data is Loading....</p>;

  return (
    <>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {Array.isArray(data)
        ? data.map((todo) => {
            return <p key={Math.random()}>{todo.title}</p>;
          })
        : null}
    </>
  );
};

export default DataFetch;
