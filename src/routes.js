import React from 'react';
import { Route, IndexRoute } from 'react-router'

//Import Components
// import App from './components/app.js';
import Main from './components/main.js';
import Blog from './components/blog.js';
import Dashboard from './components/dashboard.js';
import Cv from './components/cv.js';
import Home from './components/home.js';
import NotFoundPage from './components/notfoundpage.js';

const routes = (
  	<Route path="/" component={Main}>
		{/* make them children of `App` */}
		<IndexRoute component={Home}></IndexRoute>
		<Route path="/blog" component={Blog}/>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/cv" component={Cv}/>
	</Route>
);

export default routes;