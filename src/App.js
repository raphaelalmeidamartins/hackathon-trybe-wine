import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/checkout';
import Landing from './pages/landing';

function App() {
  return (
    <Switch>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/" component={Landing} />
    </Switch>
  );
}

export default App;
