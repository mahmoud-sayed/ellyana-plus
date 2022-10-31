import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem/CarouselItem';
import panner from './../../assets/FixedJsonData/panner.json';
const CarouselComponent = () => {


  return (
    <Carousel>
      {
        panner.map((item) => <CarouselItem key={item.id} item={item.img} />)
      }
    </Carousel>
  );
};

export default CarouselComponent;