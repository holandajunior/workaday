import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Internal dependencies
import { LoginComponent } from './login';
import { App, requireAuth } from 'appComponents';

import { Main,
		 ListPointsComponent } from './admin';


export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ LoginComponent } />
		
		<Route component={ requireAuth(Main) } >
			<Route path="/user/points" component={ ListPointsComponent } />
		</Route>
		
		<Route path="/login" component={ LoginComponent } />
		<Route path="/signup" component={ LoginComponent } />
		{// TODO
		//<Route path="*" component={ NotFoundPage } />}
		}
	</Route>

);