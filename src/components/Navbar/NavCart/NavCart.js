import { Badge, IconButton, Stack, Typography, Avatar, Divider, ListItemIcon, Menu, MenuItem, } from '@mui/material';
import React, { Fragment } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';




const NavCart = () => {
  return (
    <Fragment>
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
      <Menu

        id="account-menu"
        open={true}

        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 10,
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
              right: 10,
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
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default NavCart;