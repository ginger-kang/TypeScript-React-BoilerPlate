import React from 'react';
import { GlobalStyle } from './global-styles';
import Router from './Router';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  );
}

export default App;
