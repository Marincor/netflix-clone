import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScrollDois from "./InfiniteScrollDois";
import Lottie from "react-lottie-player";
import animationData from "../../../assets/lotties/load.json";
import { BoxLottie } from "../../UI/variables";
import CarouselUm from "../Carousel/Carousel";

const InfiniteScrollUm = () => {
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
      setItems(items.concat(Array.from({ length: 1 })));
    }, 1500);
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <BoxLottie primary={"100vw"}>
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 50, height: 50 }}
          />
        </BoxLottie>
      }
    >
      {items.map((i, index) => (
        <div key={`DivInfiniteScrollUm - ${index}`}>
          <CarouselUm />
          <InfiniteScrollDois />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollUm;
