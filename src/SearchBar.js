import React from "react";

const SearchBar = ({ Value, onFormChange }) => {
  return (
    <div className="SearchBar">
      <label>Search</label>
      <input value={Value} onChange={onFormChange} />
    </div>
  );
};

export default SearchBar;
