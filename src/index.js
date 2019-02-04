import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './global-styles';
import Header from './header';
import Container from './container';

library.add(fab);

const App = () => (
  <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
registerServiceWorker();
