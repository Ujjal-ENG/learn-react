import React from "react";
import { useState } from "react";

const booksData = [
  { id: 1, name: "Ujjal Roy" },
  { id: 2, name: "Ador Roy" },
  { id: 3, name: "Adhora Roy" },
];

const useReducer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  const handleChange = (e) => {
    setBookName(e.target.value)
  }
  const handleSubmit = (e) => {
    
  }
  return (
    <>
      <h1>Book List</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" value={bookName} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </>
  );
};

export default useReducer;
