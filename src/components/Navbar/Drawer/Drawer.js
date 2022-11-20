import React, { useState, Fragment } from 'react';
import { Drawer, List, ListItemButton, ListItemText, IconButton, Divider, Grid, useTheme, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import style from './Drawer-style';
import { useNavigate } from 'react-router-dom';


const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  //this list can be only one list item and map() od the list items so we will not re write the code again and again
  return (
    <Fragment>
      <IconButton size='large' edge='start' onClick={() => setOpen(true)}
        sx={{ display: { xs: 'initial', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.darkBackGround.main,
            width: '90%'
          }
        }}
      >
        <List sx={style('ListBackGround', theme)} >
          <Toolbar />
          <ListItemButton
            divider={true}
            sx={style('ListItemButton', theme)}
            onClick={() => setOpen(false)} href='#home'
          >
            <Grid container >
              <Grid container item direction='row' alignItems='center' spacing={.5}
                onClick={() => navigate('/')}
              >
                <Grid item><HomeIcon fontSize='small' sx={{ color: '#fff' }} /></Grid>
                <Grid item><ListItemText primary='Home' sx={{ mr: 10, color: '#fff' }} /></Grid>
              </Grid>
              <Grid container item alignItems='center'>
                <Grid item sx={{ color: '#fff' }}></Grid>
              </Grid>
            </Grid>
          </ListItemButton>
          <Divider sx={style('divider', theme)} />
          <ListItemButton
            divider={true}
            sx={style('ListItemButton', theme)}
            onClick={() => setOpen(false)} href='#home'
          >
            <Grid container>
              <Grid container item direction='row' alignItems='center' spacing={.5}
                onClick={() => navigate('/products')}>
                <Grid item><ListItemText primary='Brands' sx={{ mr: 10, color: '#fff' }} /></Grid>
              </Grid>
              <Grid container item alignItems='center'>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </ListItemButton>
          <Divider sx={style('divider', theme)} />
          <ListItemButton
            divider={true}
            sx={style('ListItemButton', theme)}
            onClick={() => setOpen(false)} href='#home'
          >
            <Grid container>
              <Grid container item direction='row' alignItems='center' spacing={.5}
                onClick={() => navigate('/products')}>
                <Grid item><ListItemText primary='LookBook' sx={{ mr: 10, color: '#fff' }} /></Grid>
              </Grid>
              <Grid container item alignItems='center'>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </ListItemButton>
          <Divider sx={style('divider', theme)} />
          <ListItemButton
            divider={true}
            sx={style('ListItemButton', theme)}
            onClick={() => setOpen(false)} href='#home'
          >
            <Grid container>
              <Grid container item direction='row' alignItems='center' spacing={.5}
                onClick={() => navigate('/products')}>
                <Grid item><ListItemText primary='Accessories' sx={{ mr: 10, color: '#fff' }} /></Grid>
              </Grid>
              <Grid container item alignItems='center'>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </ListItemButton>
          <Divider sx={style('divider', theme)} />
          <ListItemButton
            divider={true}
            sx={style('ListItemButton', theme)}
            onClick={() => setOpen(false)} href='#home'
          >
            <Grid container>
              <Grid container item direction='row' alignItems='center' spacing={.5}>
                <Grid item><ListItemText primary='Pages' sx={{ mr: 10, color: '#fff' }} /></Grid>
              </Grid>
              <Grid container item alignItems='center'>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </ListItemButton>
          <Divider sx={style('divider', theme)} />
          <ListItemButton
            divider={true}
            sx={style('ListItemButton', theme)}
            onClick={() => setOpen(false)} href='#home'
          >
            <Grid container>
              <Grid container item direction='row' alignItems='center' spacing={.5}
                onClick={() => navigate('/blog')}>
                <Grid item><ListItemText primary='Blog' sx={{ mr: 10, color: '#fff' }} /></Grid>
              </Grid>
              <Grid container item alignItems='center'>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </ListItemButton>
        </List>
      </Drawer>
    </Fragment >
  );
};
export default DrawerComponent;