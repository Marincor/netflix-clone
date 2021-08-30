import React, { useState } from "react";

export const SearchContext = React.createContext();

export const SearchProvider = (props) => {
  const [searchInput, setSearchInput] = useState({
    content: "Matrix",
  });

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {props.children}
    </SearchContext.Provider>
  );
};
