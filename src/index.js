import React from 'react';
import { render } from 'react-dom';

// Import css
import Style from './styles/style.scss';

//Import Components
import App from './components/app.js';
import Blog from './components/blog.js';
import Dashboard from './components/dashboard.js';
import Cv from './components/cv.js';
import Home from './components/home.js';

//Import React Router and it's dependencies
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				{/* make them children of `App` */}
				<IndexRoute component={Home}></IndexRoute>
				<Route path="/blog" component={Blog}/>
				<Route path="/dashboard" component={Dashboard}/>
				<Route path="/cv" component={Cv}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('container'))