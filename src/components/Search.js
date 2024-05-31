import React from 'react';

const Search = ({ setSearch }) => {
  const handleSearch = (phrase) => {
    setSearch(phrase.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search repositories..."
      onChange={handleSearch}
    />
  );
};

export default Search;
