import React from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./components/pages/Blogs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Navbar from "./components/pages/Navbar";
import Blog from "./components/pages/Blog";
import User from "./components/pages/User";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
