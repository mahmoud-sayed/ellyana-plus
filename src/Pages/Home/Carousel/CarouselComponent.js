import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem/CarouselItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// images import
import img1 from './../../../assets/Banner/banner-01.jpg';
import img2 from './../../../assets/Banner/banner-02.jpg';
import img3 from './../../../assets/Banner/banner-03.jpg';
const CarouselComponent = () => {

  const panner = [
    {
      "id": 1,
      "img": img1
    },
    {
      "id": 2,
      "img": img2
    },
    {
      "id": 3,
      "img": img3
    }
  ];

  return (
    <Carousel
      fullHeightHover={false}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      navButtonsProps={{
        style: {
          width: '3rem',
          height: '3rem',
          opacity: "1",
          borderRadius: 0,

        }
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '-5rem',
          display: 'block'

        }

      }}
    >
      {
        panner.map((item) => <CarouselItem key={item.id} item={item.img} />)
      }
    </Carousel>
  );
};

export default CarouselComponent;