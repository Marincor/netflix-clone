import React, { useEffect, useState } from "react";
import { ApiPopularTrendingPage } from "../../../services/services";
import {

  BoxCardsItems,
  BoxContent,

} from "../../UI/variables";


const PopularPage = () => {
 

 

  // pages config //

 
  const [movies, setMovies] = useState([]);

 

  useEffect(() => {
    ApiPopularTrendingPage().then((data) => setMovies(data.results));


   
  });



  return (
    <BoxContent paddingTop={"10rem"} primaryColor={"black"}>
      {movies.map((item, index) => {
        return (
          <>
            <BoxCardsItems
              key={index}
              poster={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            />
          </>
        );
      })}
    
    </BoxContent>
  );
};


export default PopularPage;