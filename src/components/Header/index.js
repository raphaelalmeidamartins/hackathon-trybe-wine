import { Drawer, SvgIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/theme';
import lightTheme from '../../styles/lightTheme';
import navLinks from './utils/helpers';
import MenuHambugerIcon from './utils/icons/MenuHamburgerIcon';
import logo from './utils/images/wine-logo.svg';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useSelector((state) => state.theme.data);
  const dispatch = useDispatch();

  const handleOpenNavMenu = ({ currentTarget }) => {
    setAnchorElNav(currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: (theme === 'dark' ? lightTheme.palette.secondary.main : 'white') }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: 'none', md: 'block' }, marginRight: '20px' }}
          >
            <img src={logo} alt="Wine" />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                marginRight: '8px',
              }}
            >
              <SvgIcon>
                <MenuHambugerIcon />
              </SvgIcon>
            </IconButton>
            <Drawer
              variant="temporary"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': { width: '50%' },
              }}
            >
              {navLinks.map(({ name, href }) => (
                <MenuItem key={href} onClick={handleCloseNavMenu}>
                  <Button
                    variant="text"
                    component="a"
                    href={href}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    {name}
                  </Button>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              flexGrow: 1,
              marginRight: '20px',
            }}
          >
            <img
              src={logo}
              alt="Wine"
              style={{ height: '20px', objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map(({ name, href }) => (
              <Button
                key={href}
                component="a"
                onClick={handleCloseNavMenu}
                href={href}
                sx={{
                  my: 2,
                  display: 'block',
                  padding: '0 20px',
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              onClick={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
              sx={{ margin: '0 6px', p: 0 }}
            >
              <SvgIcon>
                {theme === 'dark'
                  ? <BsFillSunFill color="white" />
                  : <BsFillMoonFill color="black" />}
              </SvgIcon>
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <IconButton
              size="large"
              onClick={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
              sx={{ margin: '0 6px', p: 0 }}
            >
              {theme === 'dark'
                ? <BsFillSunFill color="white" />
                : <BsFillMoonFill color="black" />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
