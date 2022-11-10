import React from "react";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const loaction = useLocation();
  console.log(loaction);

  return (
    <>
      <h1>{`This is the ${loaction.state.title} page`}</h1>
      <p>{loaction.state.body.slice(0, 500)}</p>
    </>
  );
};

export default Blog;
