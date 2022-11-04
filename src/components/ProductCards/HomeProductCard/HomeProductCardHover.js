import React from 'react';
import { Paper, createTheme } from '@mui/material';
import style from './HomeProductCardHover-Style';

const HomeProductCardHover = () => {
  const theme = createTheme();

  return (
    <Paper
      sx={style('', theme)}>
      hello
    </Paper>
  );
};

export default HomeProductCardHover;