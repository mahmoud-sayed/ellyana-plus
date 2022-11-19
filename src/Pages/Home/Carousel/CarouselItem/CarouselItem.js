import React from 'react';
import { Paper } from '@mui/material';


const CarouselItem = (props) => {
  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <img
        style={{ height: '100%', width: '100%' }}
        src={props.item} alt="" />
    </Paper>
  );
};

export default CarouselItem;