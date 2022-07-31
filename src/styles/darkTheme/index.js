import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#FFF',
      contrastText: '#4E1A3D',
    },
    error: {
      main: '#ef7a52',
    },
    text: {
      primary: '#ffffff',
      secondary: '#F7BEC0',
      disabled: '#F7BEC0',
      hint: '#F7BEC0',
    },
    background: {
      default: '#281620',
      paper: '#75493b',
      wineBox: '#3b1e2e',
    },
  },
  colors: {
    plansCard: '#75493b',
    borderGrey: '#5e2f48',
    mainOrange: '#F68B2C',
    mainPurple: '#4E1A3D',
    carafe: '#4E1A3D',
    roseRed: '#FF2768',
    roseQuartz: '#F7BEC0',
    babyPink: '#d6a9d4',
    burnetOrange: '#ffb49b',
    burnetSienna: '#D48C70',
    gradient: 'linear-gradient(0deg, #521532ff 0%, #3b1e2e 100%',
    lightIndigo: '#2a3468',
  },
});

export default darkTheme;
