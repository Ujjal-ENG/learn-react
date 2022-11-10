import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-blog">AddBLog</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
};

export default Navbar;
