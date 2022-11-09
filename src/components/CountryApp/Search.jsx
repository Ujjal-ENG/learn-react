import React from "react";
import { useState, useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, []);

  return (
    <>
      <div>
        <input
          style={{ textAlign: "center" }}
          type="text"
          placeholder="search country"
          value={searchText}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
