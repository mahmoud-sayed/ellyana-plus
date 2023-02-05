import React from 'react';
import { Paper, createTheme, Card, CardActionArea, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import style from './productCard-style';

const ProductCard = () => {
  const theme = createTheme();

  return (
    <Card sx={style('cardStyle', theme)} >
      <Grid container>
        <Grid container item>

        </Grid>
        <Grid container item>
          <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              sx={{ height: '70%' }}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              <Button variant='contained' fullWidth >add to cart</Button>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
    </Card >

  );
};

export default ProductCard;