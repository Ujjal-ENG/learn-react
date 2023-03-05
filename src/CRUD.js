import React, { useState, useEffect } from "react";

import UserForm from "./components/UserForm/UserForm";

const url = "https://rest-api-without-db.herokuapp.com/users/";

function CRUD() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //update
  const [selectedUserID, setSelectedUserID] = useState("");
  const [selectedUser, setSelectedUser] = useState({
    username: "",
    email: "",
  });

  const [updateFlag, setUpdateFlag] = useState(false);

  const getAllUsers = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could Not face Data successfully");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = (id) => {
    fetch(url + `/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not Delete");
        }
        getAllUsers();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const addUser = (user) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 201) {
          getAllUsers();
        } else {
          throw new Error("Could not Created Data");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleEdit = (id) => {
    setSelectedUserID(id);
    setUpdateFlag(true);
    const filteredData = users.filter((user) => user.id === id);
    setSelectedUser({
      username: filteredData[0].username,
      email: filteredData[0].email,
    });
  };

  const handleUpdate = (user) => {
    console.log(user);
    fetch(url + `/${selectedUserID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to Updated");
        } else {
          getAllUsers();
          setUpdateFlag(false);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <>
      <h1>CRUD Operation APP using API</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {updateFlag ? (
        <UserForm
          btnText="Update User"
          selectedUser={selectedUser}
          handleSubmitData={handleUpdate}
        />
      ) : (
        <UserForm btnText="Add User" handleSubmitData={addUser} />
      )}

      <section>
        {users &&
          users.map((user) => {
            const { id, username, email } = user;
            return (
              <article key={id} className="card">
                <h2>{username}</h2>
                <p>{email}</p>
                <button className="btn" onClick={() => handleEdit(id)}>
                  Edit
                </button>
                <button className="btn" onClick={() => handleDelete(id)}>
                  Delete
                </button>
              </article>
            );
          })}
      </section>
    </>
  );
}

export default CRUD;
