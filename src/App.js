import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/checkout';
import Landing from './pages/landing';
import Receipt from './pages/receipt';

function App() {
  return (
    <Switch>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/receipt" component={Receipt} />
      <Route exact path="/" component={Landing} />
    </Switch>
  );
}

export default App;
