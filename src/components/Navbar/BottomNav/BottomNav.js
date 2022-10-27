import { Box, Button, Container, FormControl, Grid, InputLabel, ListItemIcon, MenuItem, MenuList, Toolbar, Typography, InputAdornment, IconButton, Input, OutlinedInput, InputBase } from '@mui/material';
import React from 'react';
import { createTheme } from '@mui/material';
import style from './BottomNav-style';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';



const BottomNav = () => {
  const theme = createTheme();

  return (
    <Box sx={style('toolbarStyle', theme)}>
      <Container maxWidth='xl' sx={{ height: '100%' }}>
        <MenuList sx={{ padding: '0', height: '100%', width: '100%' }}>
          <Grid container justifyContent='center' alignItems='center' sx={{ height: '100%', width: '100%' }} >
            <Grid item container justifyContent='center' alignItems='center' sx={{ height: '100%', width: '100%' }}>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}>
                <MenuItem sx={style('listItem', theme)}>
                  <ListItemIcon><HomeIcon fontSize='small' sx={{ color: '#fff' }} /></ListItemIcon>
                  <Typography variant='body2'>HOME</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}>
                <MenuItem sx={style('listItem', theme)}>
                  <Typography variant='body2'>BRANDS</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}>
                <MenuItem sx={style('listItem', theme)}>
                  <Typography variant='body2'>LOOKBOOK</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}>
                <MenuItem sx={style('listItem', theme)}>
                  <Typography variant='body2'>ACCESSORIES</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}>
                <MenuItem sx={style('listItem', theme)}>
                  <Typography variant='body2'>PAGES</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}>
                <MenuItem sx={style('listItem', theme)}>
                  <Typography variant='body2'>BLOG</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', width: { xs: '100%', md: '25ch' } }}>
                <MenuItem sx={style('listItemSearch', theme)}>
                  <FormControl fullWidth sx={{ width: { xs: '100%', md: '25ch' }, color: '#fff', height: '100%' }} variant="standard">
                    <InputBase
                      sx={style('outlinedInput', theme)}
                      placeholder="Search"
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchIcon sx={{ color: '#fff' }} />
                        </InputAdornment>
                      }

                    />

                  </FormControl>
                </MenuItem>
              </Grid>
            </Grid>
          </Grid>
        </MenuList>
      </Container>
    </Box >
  );
};

export default BottomNav;