import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4C5270',
    },
    secondary: {
      main: '#4E1A3D',
      contrastText: '#FFF',
    },
    error: {
      main: '#ef7a52',
    },
    text: {
      primary: '#391306',
      secondary: 'rgba(57, 19, 6, 0.7)',
      disabled: 'rgba(57, 19, 6, 0.7)',
      hint: 'rgba(57, 19, 6, 0.7)',
    },
    background: {
      default: '#FCFCFC',
      paper: '#F7BEC0',
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
  typography: {
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
