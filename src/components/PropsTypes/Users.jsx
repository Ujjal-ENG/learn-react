import React from "react";
import { useState } from "react";
import User from "./User";

const Users = () => {
  const [userName, setUserName] = useState("Ujjal");
  const [userId, setUserId] = useState("101");

  return (
    <>
      <User name={userName} id={userId} />
    </>
  );
};

export default Users;
