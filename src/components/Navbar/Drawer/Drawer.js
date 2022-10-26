import React, { useState, Fragment } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Grid, useTheme, Toolbar, Typography, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CallIcon from '@mui/icons-material/Call';
import style from './Drawer-style';


const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();


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
            <Grid container>
              <Grid container item direction='row' alignItems='center' spacing={.5}>
                <Grid item><HomeIcon fontSize='small' sx={{ color: '#fff' }} /></Grid>
                <Grid item><ListItemText primary='Home' sx={{ mr: 10, color: '#fff' }} /></Grid>
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
                <Grid item><ListItemText primary='Home' sx={{ mr: 10, color: '#fff' }} /></Grid>
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
              <Grid container item direction='row' alignItems='center' spacing={.5}>
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
              <Grid container item direction='row' alignItems='center' spacing={.5}>
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
              <Grid container item direction='row' alignItems='center' spacing={.5}>
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