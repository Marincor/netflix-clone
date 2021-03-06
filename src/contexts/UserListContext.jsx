import React, { useState } from "react";

export const ListContext = React.createContext();

export const ListProvider = (props) => {

    const currentList = JSON.parse( localStorage.getItem('userMovieList'))
  const [moviesId, setMoviesId] = useState({
    arr: currentList || [],
  });

  
  const currentListSeries = JSON.parse( localStorage.getItem('userMovieListSeries'))
  const [seriesId, setSeriesId] = useState({
    arr: currentListSeries || [],
  });

  return (
    <ListContext.Provider value={{ moviesId, setMoviesId, seriesId, setSeriesId }}>
      {props.children}
    </ListContext.Provider>
  );
};
