import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ProtectingRouting/Home";
import AddBlog from "../ProtectingRouting/AddBlog";
import About from "../ProtectingRouting/About";
import Error from "../pages/Error";
import Navbar from "../layout/Navbar";
import { useState } from "react";
import Protected from "./Protected";

const Index = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isLogIn ? (
          <button
            onClick={() => {
              setIsLogIn(!isLogIn);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogIn(!isLogIn);
            }}
          >
            LogIn
          </button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-blog"
            element={
              <Protected isLogIn={isLogIn}>
                <AddBlog />
              </Protected>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
