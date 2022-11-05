import React from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const Index = () => {
  const isLogin = false;
  return (
    !isLogin ? <HomePage /> : <LoginPage />
  );
};

export default Index;
