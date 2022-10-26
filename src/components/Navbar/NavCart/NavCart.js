import { Badge, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const NavCart = () => {
  return (
    <Stack direction='row' spacing={1} alignItems='center' sx={{ cursor: 'pointer' }}>
      <IconButton>
        <Badge color="error" badgeContent="0" >
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: '#000' }}
          />
        </Badge>
      </IconButton>
      <Stack direction='column'>
        <Typography sx={{ display: { xs: 'none', sm: 'initial' }, color: '#000' }}>My Cart</Typography>
        <Typography sx={{ display: { xs: 'none', sm: 'initial' }, color: '#000' }}>$165</Typography>
      </Stack>
    </Stack >

  );
};

export default NavCart;