import React from "react";
import "./search.css";
const Search = ({ setSearch, setNextPage }) => {
  return (
    <form action="" className="search">
      <input
        type="text"
        name=""
        onChange={(event) => {
          setNextPage(1);
          setSearch(event.target.value);
        }}
        className="text"
        placeholder="Search for a Character"
        id=""
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
