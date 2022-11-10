import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { blogsData } from "../../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const trunCateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  return (
    <>
      <h1>This is Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{trunCateString(body, 100)}</p>
              <NavLink to={title} state={{ id, title, body }}>
                Learn More
              </NavLink>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Blogs;
