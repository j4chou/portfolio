import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';

import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import routes from './router/router';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
