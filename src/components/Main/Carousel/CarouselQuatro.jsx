import React, { useEffect, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { ApiMovieTopRated, ApiTvSeries } from "../../../services/services";
import { BoxSlider, BoxCards, CardSession } from "../../UI/variables";
import { Link } from "react-router-dom";
import { BotaoList } from "../../UI";
import { ListContext } from "../../../contexts/UserListContext";


const CarouselQuatro = () => {
  const [posters, setPosters] = useState([]);
  const [ids, setIds] = useState([])

  useEffect(() => {
    

    

    ApiTvSeries().then((data) => {
      let arrPoster = [];
      let arrIds = [];
  
  
      data.results.forEach((item) => {
        arrPoster.push(item.poster_path);
        arrIds.push(item.id);
      
        setPosters(arrPoster);
        setIds(arrIds)
       

        
      });
    });
  }, []);

 // - - -- - state of context list - - - -- //

 const { seriesId, setSeriesId } = React.useContext(ListContext);

 let vetorIdMovies = seriesId.arr || [];




 function HandleList(e) {
   const currentMovie = e.target.parentElement.id;

   vetorIdMovies.push(currentMovie);
  

   setSeriesId({ ...seriesId, arr: vetorIdMovies });
   localStorage.setItem('userMovieListSeries', JSON.stringify( vetorIdMovies))
 
 }

/* because of an error in the carousel component library, I decided to set manually the images background in render, instead of an map method in the array */

  return (
    <BoxSlider>
      <Link className='btn__link' to='/series'>
          <CardSession>Séries do momento:</CardSession>
      </Link>
     
      <Carousel
        className="slider"
        plugins={[
          "clickToChange",

          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 8,
            },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={2000}
      >


        <BoxCards
          poster={
            `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[0]}`
          }

          id={ids[0]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
       
      

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[1]}`}
          id={ids[1]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[2]}`}
          id={ids[2]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
       

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[3]}`}
          id={ids[3]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[4]}`}
          id={ids[4]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[5]}`}
          id={ids[5]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
         
        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[6]}`}
          id={ids[6]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[7]}`}
          id={ids[7]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[8]}`}
          id={ids[8]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[9]}`}
          id={ids[9]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
         


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[10]}`}
          id={ids[10]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[11]}`}
          id={ids[11]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[12]}`}
          id={ids[12]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
        


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[13]}`}
          id={ids[13]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
         


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[14]}`}
          id={ids[14]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[15]}`}
          id={ids[15]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
         


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[16]}`}
          id={ids[16]}
       ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[17]}`}
          id={ids[17]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[18]}`}
          id={ids[18]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[19]}`}
          id={ids[19]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>

      </Carousel>
    </BoxSlider>
  );
};


export default CarouselQuatro;