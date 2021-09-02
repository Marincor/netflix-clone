import React, { useEffect, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { ApiPopularMovies } from "../../../services/services";
import { BoxSlider, BoxCards, CardSession } from "../../UI/variables";
import { Link } from "react-router-dom";
import { ListContext } from "../../../contexts/UserListContext";
import { BotaoList } from "../../UI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CarouselUm = () => {

// -- Toastify config -- //

const notify = () =>
toast.success("Adicionado à lista", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const notifyError = () =>
toast.error("Esse filme já está na sua lista!", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});



  const [posters, setPosters] = useState([]);
  const [ids, setIds] = useState([])

  useEffect(() => {
    

  


    ApiPopularMovies().then((data) => {
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

  const { moviesId, setMoviesId } = React.useContext(ListContext);

  let vetorIdMovies = moviesId.arr || [];
  
  function HandleList(e) {
    const currentMovie = e.target.parentElement.id;


    const idNotRepeated =  moviesId.arr.find(atribute => atribute === currentMovie)

    if(idNotRepeated === undefined) { 


        
    vetorIdMovies.push(currentMovie);
    setMoviesId({ ...moviesId, arr: vetorIdMovies });
    localStorage.setItem('userMovieList', JSON.stringify( vetorIdMovies))
    notify();

    }else {

      notifyError();
    }

  }



/* because of an error in the carousel component library, I decided to set manually the images background in render, instead of an map method in the array */

  return (
    <BoxSlider>
       <div>
                  <ToastContainer
                    className="toaster"
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
      <Link className='btn__link' to='/popular'>
      <CardSession>Populares:</CardSession>
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
        breakpoints={{
          640: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 2
               }
             },
           ]
          },
          900: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 4
               }
             },
             
           ]
          },
          1024: {
            plugins: [
             {
               resolve: slidesToShowPlugin,
               options: {
                numberOfSlides: 5
               }
             },
           ]
          },
        }}
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
          id={ids[18]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[18]}`}
          id={ids[19]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[19]}`}
          id={ids[20]}
        ><BotaoList onClick={HandleList}>➕</BotaoList></BoxCards>

      </Carousel>
    </BoxSlider>
  );
};

export default CarouselUm