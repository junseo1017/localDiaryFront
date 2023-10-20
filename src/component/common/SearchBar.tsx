import React, { useState } from "react";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<String>();
  const onSearchBarChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return <input onChange={onSearchBarChangeHandler}></input>;
};

export default SearchBar;
