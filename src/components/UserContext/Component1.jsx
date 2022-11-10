import React from "react";
import { useState } from "react";
import Component4 from "./Component4";
import { UserContext } from "./UserContext";

const Component1 = () => {
  const [user, setUser] = useState({
    id: 101,
    name: "Ujjal Kumar Roy",
  });

  const [text, setText] = useState("Hello I am Text");
  return (
    <UserContext.Provider value={{user, text}}>
      <Component4 />
    </UserContext.Provider>
  );
};

export default Component1;
