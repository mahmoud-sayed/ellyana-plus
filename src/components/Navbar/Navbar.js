import React from 'react';
import { AppBar, Stack } from '@mui/material';
import TopNav from './TopNav/TopNav';
import BottomNav from './BottomNav/BottomNav';


const Navbar = () => {
  return (
    <Stack >
      <AppBar>
        <TopNav />
        <BottomNav />
      </AppBar>
    </Stack>
  );
};

export default Navbar;