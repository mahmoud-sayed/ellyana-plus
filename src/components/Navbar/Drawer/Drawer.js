import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CallIcon from '@mui/icons-material/Call';


const DrawerComponent = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <IconButton size='large' edge='start' onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ color: 'primary', paddingTop: '0' }} >
          <ListItemButton divider={true} sx={{ padding: '0', backgroundColor: '#282828' }} onClick={() => setOpen(false)} href='#home'>
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
          <ListItemButton backgroundColor='' sx={{ padding: '0' }} onClick={() => setOpen(false)} href='#about'>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary='About Me' sx={{ mr: 10 }} />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => setOpen(false)} href='#services'>
            <ListItemIcon><WorkIcon /></ListItemIcon>
            <ListItemText primary='Services' />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => setOpen(false)} href='#portfolio'>
            <ListItemIcon><DesktopWindowsIcon /></ListItemIcon>
            <ListItemText primary='Portfolio' />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => setOpen(false)} href='#contact'>
            <ListItemIcon><CallIcon /></ListItemIcon>
            <ListItemText primary='Contact' />

          </ListItemButton>
        </List>

      </Drawer>
    </>
  );
};
export default DrawerComponent;