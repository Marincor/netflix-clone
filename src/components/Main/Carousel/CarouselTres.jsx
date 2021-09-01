import React, { useEffect, useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { ApiMovieComingSoon } from "../../../services/services";
import { BoxSlider, BoxCards, CardSession } from "../../UI/variables";
import { Link } from "react-router-dom";



const CarouselTres = () => {
  const [posters, setPosters] = useState([]);
  

  useEffect(() => {
    

    

    ApiMovieComingSoon().then((data) => {
      let arrPoster = [];
        console.log(data)
  
      data.results.forEach((item) => {
        arrPoster.push(item.poster_path);
        
      
        setPosters(arrPoster);
      
       

        
      });
    });
  }, []);




/* because of an error in the carousel component library, I decided to set manually the images background in render, instead of an map method in the array */

  return (
    <BoxSlider>
      <Link className='btn__link' to='/em-breve'>
          <CardSession>Em Breve:</CardSession>
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
         forceto
        />
       
      

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[1]}`}
        
        />

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[2]}`}
        />
       

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[3]}`}
        />
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[4]}`}
        />
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[5]}`}
        />
         
        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[6]}`}
        />
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[7]}`}
        />
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[8]}`}
        />
          

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[9]}`}
        />
         


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[10]}`}
        />
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[11]}`}
        />
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[12]}`}
        />
        


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[13]}`}
        />
         


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[14]}`}
        />


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[15]}`}
        />
         


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[16]}`}
       / >
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[17]}`}
        />
          


        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[18]}`}
        />

        <BoxCards
          poster={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posters[19]}`}
        />

      </Carousel>
    </BoxSlider>
  );
};


export default CarouselTres;