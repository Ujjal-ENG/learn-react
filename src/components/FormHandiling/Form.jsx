import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === "username") {
      setUser({ name: e.target.value, email, password });
    }
    if (fieldName === "email") {
      setUser({ name, email: e.target.value, password });
    }

    if (fieldName === "password") {
      setUser({ name, email, password: e.target.value });
    }
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    console.log("Form is Submitted");
    console.log(user);
    e.preventDefault();
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <h3>Provide Your UserName: </h3>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">
            <h3>Provide Your Valid Email: </h3>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your valid Email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">
            <h3>Provide Your Password: </h3>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Form;
