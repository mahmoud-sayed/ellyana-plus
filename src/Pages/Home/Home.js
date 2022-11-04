import React from 'react';
import CarouselComponent from './../../components/Carousel/CarouselComponent';
import HomeProductCard from '../../components/ProductCards/HomeProductCard/HomeProductCardHover';

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <HomeProductCard />
    </div>
  );
};

export default Home;