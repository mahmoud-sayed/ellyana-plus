import React from 'react';
// import CarouselComponent from './/Carousel/CarouselComponent';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      {/* <CarouselComponent /> */}
      <Box mt={9} mb={5}>
        <Container>
          <Grid container>
            <Grid item>
              <Typography variant='h1' sx={{ fontWeight: 100 }}>NEW RELEASED</Typography>
              <Typography></Typography>
            </Grid>
            <Grid container item>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;