import React from 'react';
// import CarouselComponent from './/Carousel/CarouselComponent';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import style from './Home-Style';

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      {/* <CarouselComponent /> */}
      <Box mt={9} mb={5}>
        <Container>
          <Grid container justifyContent='center'>
            <Grid container item alignItems='center' direction='column'>
              <Grid item>
                <Typography
                  variant='body2'
                  style={style('sectionsCaption', theme)}
                >
                  NEW RELEASED
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  style={style('sectionsSecondCaption', theme)}
                >
                  NEW TRENDING PRODUCT
                </Typography>
              </Grid>

            </Grid>
            <Grid container item>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div >
  );
};

export default Home;