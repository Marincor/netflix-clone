import React, { useState } from "react";

export const ListContext = React.createContext();

export const ListProvider = (props) => {

    const currentList = JSON.parse( localStorage.getItem('userMovieList'))

  const [moviesId, setMoviesId] = useState({
    arr: currentList || [],
  });

  return (
    <ListContext.Provider value={{ moviesId, setMoviesId }}>
      {props.children}
    </ListContext.Provider>
  );
};
