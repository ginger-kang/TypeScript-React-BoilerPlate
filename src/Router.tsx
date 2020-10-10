import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './routes/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
