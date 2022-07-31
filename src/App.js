import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/checkout';
import Landing from './pages/landing';
import Receipt from './pages/receipt';
import darkTheme from './styles/darkTheme';
import lightTheme from './styles/lightTheme';

function App() {
  const theme = useSelector((state) => state.theme.data);
  return (

    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/receipt" component={Receipt} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
