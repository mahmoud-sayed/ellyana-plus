import { Badge, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const NavCart = () => {
  return (
    <Stack direction='row' spacing={1} alignItems='center' sx={{ cursor: 'pointer' }}>
      <IconButton>
        <Badge color="error" badgeContent="0">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      <Typography>My Cart</Typography>
    </Stack>

  );
};

export default NavCart;