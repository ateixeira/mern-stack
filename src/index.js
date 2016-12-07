import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Style from './styles/style.scss';

import App from './components/app.js';
import Blog from './components/blog.js';
import Dashboard from './components/dashboard.js';
import Cv from './components/cv.js';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/blog" component={Blog}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/cv" component={Cv}/>
    </Route>
  </Router>
), document.getElementById('container'))