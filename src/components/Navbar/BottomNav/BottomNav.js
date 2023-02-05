import React, { useState } from 'react';
import { Box, Container, FormControl, Grid, ListItemIcon, MenuItem, MenuList, Typography, InputAdornment, InputBase } from '@mui/material';
import { createTheme } from '@mui/material';
import style from './BottomNav-style';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import HoverMenu from './HoverMenu/HoverMenu';
import { useNavigate } from 'react-router-dom';



const BottomNav = () => {
  const [anchorHome, setAnchorHome] = useState(null);
  const openHome = Boolean(anchorHome);

  const [anchorBrands, setAnchorBrands] = useState(null);
  const openBrands = Boolean(anchorBrands);

  const [anchorLookBook, setAnchorLookBook] = useState(null);
  const openLookBook = Boolean(anchorLookBook);

  const [anchorAccessories, setAnchorAccessories] = useState(null);
  const openAccessories = Boolean(anchorAccessories);

  const [anchorPages, setAnchorPages] = useState(null);
  const openPages = Boolean(anchorPages);

  const theme = createTheme();
  const navigate = useNavigate();



  // const handleClick = (event) => {
  //   // console.log(event.currentTarget.getAttribute("name"));
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorHome(null);
  };


  return (
    <Box sx={style('toolbarStyle', theme)}>
      <Container maxWidth='xl' sx={{ height: '100%' }}>
        <MenuList sx={{ padding: '0', height: '100%', width: '100%' }}>
          <Grid container justifyContent='center' alignItems='center' sx={{ height: '100%', width: '100%' }} >
            <Grid item container justifyContent='center' alignItems='center' sx={{ height: '100%', width: '100%' }}>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}
                name='HOME'
                onMouseEnter={(event) => { setAnchorHome(event.currentTarget); }}
                onClick={() => navigate('/')}

              >
                <MenuItem
                  sx={style('listItem', theme)}
                >
                  <ListItemIcon><HomeIcon fontSize='small' sx={{ color: '#fff' }} /></ListItemIcon>
                  <Typography variant='body2'>HOME</Typography>
                </MenuItem>
                <HoverMenu
                  anchorEl={anchorHome}
                  open={openHome}
                  handleClose={() => setAnchorHome(!anchorHome)}
                  data={'home'}
                />
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}
                name='BRANDS'
              // onClick={handleClick}
              // onMouseLeave={handleClose}
              >
                <MenuItem sx={style('listItem', theme)} onClick={() => navigate('/products')}>
                  <Typography variant='body2'>BRANDS</Typography>
                </MenuItem>

              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}
              // name='LOOKBOOK'
              // onClick={handleClick}
              >
                <MenuItem sx={style('listItem', theme)} onClick={() => navigate('/products')}>
                  <Typography variant='body2'>LOOKBOOK</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}
                name='ACCESSORIES'
              // onClick={handleClick}
              >
                <MenuItem sx={style('listItem', theme)} onClick={() => navigate('/products')}>
                  <Typography variant='body2'>ACCESSORIES</Typography>
                </MenuItem>
              </Grid>
              <Grid item sx={{ height: '100%', display: { xs: 'none', md: 'initial' } }}
                name='PAGES'
              // onClick={handleClick}
              >
                <MenuItem sx={style('listItem', theme)} >
                  <Typography variant='body2'>PAGES</Typography>
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