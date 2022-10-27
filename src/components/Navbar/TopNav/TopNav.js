import React from 'react';
import { Stack, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import NavCart from '../NavCart/NavCart';
import logo from './../../../assets/TopNavAssets/logo.svg';
import DrawerComponent from '../Drawer/Drawer';


const TopNav = () => {

  return (
    <Toolbar sx={{ padding: { sm: 'initial', md: '2rem 0' }, backgroundColor: '#fff' }}>
      <Container maxWidth='xl' sx={{ padding: { xs: '0', sm: '0 .5rem', md: '0 1rem' } }}>
        <Stack direction='row' sx={{ width: '100%' }} justifyContent='space-between' >
          <DrawerComponent />
          <img style={{ width: '180px' }} src={logo} alt="ellyana logo" />
          <NavCart />
        </Stack>

      </Container >
    </Toolbar >
  );
};

export default TopNav;