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
      primary: '#FCFCFC',
      secondary: '#F7BEC0',
      disabled: '#F7BEC0',
      hint: '#F7BEC0',
    },
    background: {
      default: 'black',
      paper: 'rgba(57, 19, 6, 0.7)',
    },
  },
  colors: {
    mainOrange: '#F68B2C',
    mainPurple: '#4E1A3D',
    carafe: '#4E1A3D',
    roseRed: '#FF2768',
    roseQuartz: '#F7BEC0',
    babyPink: '#d6a9d4',
    burnetOrange: '#8a2503',
    burnetSienna: '#D48C70',
    lightIndigo: '#d9dffc',
  },
});

export default darkTheme;
