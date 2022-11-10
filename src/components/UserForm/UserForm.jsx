import React from "react";
import { useState, useEffect } from "react";

const UserForm = ({ btnText, handleSubmitData, selectedUser }) => {
  const [users, setUsers] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    setUsers({
      username: selectedUser.username,
      email: selectedUser.email,
    });
  }, [selectedUser]);

  const handleChange = (e) => {
    const seletedField = e.target.name;
    const seletedValue = e.target.value;

    setUsers((prevState) => {
      return { ...prevState, [seletedField]: seletedValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitData(users);
    setUsers({
      username: "",
      email: "",
    });
  };

  return (
    <>
      <form action="post" onSubmit={handleSubmit}>
        <div className="filed-group">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={users.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="filed-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={users.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          {btnText}
        </button>
      </form>
    </>
  );
};

UserForm.defaultProps = {
  selectedUser: {
    username: '',
    email: ' '
  }
}

export default UserForm;
