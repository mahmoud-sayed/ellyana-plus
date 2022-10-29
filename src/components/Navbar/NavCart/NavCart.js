import React, { Fragment, useState } from 'react';
import { Badge, IconButton, Stack, Typography, Menu, MenuItem, } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




const NavCart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Stack onClick={handleClick} direction='row' spacing={1} alignItems='center' sx={{ cursor: 'pointer' }}>
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: .5,
            width: 500,
            marginRight: '50px',

            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: { xs: 22, sm: 75, md: 85 },
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Typography >There is no Item yet</Typography>
        </MenuItem>

      </Menu>
    </Fragment>
  );
};

export default NavCart;