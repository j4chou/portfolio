import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from '../client/components/App'
import Home from '../client/components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={Home} />
  </Route>
);
