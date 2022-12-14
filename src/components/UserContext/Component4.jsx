import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Component4 = () => {
  const { user, text } = useContext(UserContext);
  return (
    <>
      <h1>{text}</h1>
      <h2>{user.id}</h2>
      <h1>{user.name}</h1>
    </>
  );
};

export default Component4;
