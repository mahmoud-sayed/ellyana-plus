import { Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';

const HoverMenu = ({ anchorEl, open, handleClose, data }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}

      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 0,
          width: 500,
          marginRight: '50px',

          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          }
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Typography >{data}</Typography>
      </MenuItem>
    </Menu>
  );
};

export default HoverMenu;