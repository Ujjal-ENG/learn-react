import React from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const [name,setName] = useState('')
  // const { userid } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({name: name})
  }
  return (
    <>
      <h1>User</h1>
      <form action="$" onClick={handleSubmit}>
        <input type="text" value={name} onChange={((e) =>setName( e.target.value))} />
        <button type="submit" >Find User</button>
      </form> 

      {/* <h1>User: {serachParams.get("id")}</h1>
      <h1>Age: {serachParams.get("age")}</h1>
      <h1>Name: {serachParams.get("name")}</h1> */}
    </>
  );
};

export default User;
