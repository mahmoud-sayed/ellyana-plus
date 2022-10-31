import React from 'react';
import { Paper } from '@mui/material';


const CarouselItem = (props) => {
  return (
    <Paper sx={{ height: '70vh' }}>
      <img
        style={{ height: '100%', width: '100%' }}
        src={props.item} alt="" />
    </Paper>
  );
};

export default CarouselItem;