import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/load.json'
import { BoxLottie } from "../../UI/variables";
import CarouselTres from "../Carousel/CarouselTres";
import InfiniteScrollQuatro from "./InfiniteScrollQuatro";


const InfiniteScrollTres = () => {
    const [items, setItems] = useState(Array.from({ length: 0.1 }));
    const [hasMore, setHasMore] = useState(true);

    function fetchMoreData() {
        if (items.length >= 1) {
          setHasMore(false);
          return;
        }
    
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          setItems(items.concat(Array.from({ length: 1})));
        }, 1500);
      }

 // lottie animation //
 const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


    return(
<InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<BoxLottie>
            <Lottie 
            options={defaultOptions}
              height={50}
              width={50}
            />
          </BoxLottie>}
       
      >
      
      {items.map((i, index) => (

       
        <div>
            <CarouselTres/>
            <InfiniteScrollQuatro/>
        </div>
       
              
       
    ))}
            
    
           
            
      
      </InfiniteScroll>


    )


}

export default InfiniteScrollTres;