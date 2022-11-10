import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { blogsData } from "../../data";

const Blog = () => {
  const { title } = useParams();

  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title === title);
    setBodyData(blogData[0].body);
  }, []);

  return (
    <>
      <h1>{`This is the ${title} page`}</h1>
      <p>{bodyData.slice(0, 500)}</p>
    </>
  );
};

export default Blog;
