import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store';
import theme from './styles/theme';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>,
);
