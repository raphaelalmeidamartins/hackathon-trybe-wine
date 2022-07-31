import { Drawer, SvgIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import CartIcon from './icons/CartIcon';
import MenuHambugerIcon from './icons/MenuHamburgerIcon';
import ProfileOutlinedIcon from './icons/ProfileOutlinedIcon';
import SearchCircleIcon from './icons/SearchCircleIcon';
import SearchIcon from './icons/SearchIcon';
import Logo from './Logo';

const navLinks = [
  {
    name: 'Clube',
    href: 'https://www.wine.com.br/clubewine/',
  },
  {
    name: 'Loja',
    href: 'https://www.wine.com.br/loja-vinhos',
  },
  {
    name: 'Produtores',
    href: 'https://www.wine.com.br/loja/produtor/',
  },
  {
    name: 'Ofertas',
    href: 'https://www.wine.com.br/vinhos-promocao',
  },
  {
    name: 'Eventos',
    href: 'https://we.wine.com.br/',
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = ({ currentTarget }) => {
    setAnchorElNav(currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: 'none', md: 'block' }, marginRight: '20px' }}
          >
            <Logo />
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
            <Logo />
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
                  color: 'gray',
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
              component="a"
              href=""
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <SvgIcon>
                <SearchIcon />
              </SvgIcon>
            </IconButton>
            <IconButton
              size="large"
              component="a"
              href=""
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <CartIcon />
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
              component="a"
              href=""
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <SearchCircleIcon />
            </IconButton>
            <IconButton
              size="large"
              component="a"
              href=""
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <ProfileOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              component="a"
              href=""
              target="_blank"
              sx={{ margin: '0 6px', p: 0 }}
            >
              <CartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
