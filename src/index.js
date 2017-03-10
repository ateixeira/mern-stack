import React from 'react';
import { render } from 'react-dom';

// Import css - It is not explicitly used, but being here assures it will be compiled by webpack
import Style from './styles/style.scss';

//Import React Router and it's dependencies
import { Router, browserHistory } from 'react-router'

import routes from './routes';

render((
	<Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
), document.getElementById('container'))