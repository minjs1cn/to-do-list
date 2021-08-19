import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../config/route.config';

export default () => {
	return (
		<Switch>
			{routes.map(route => (
				<Route
					exact={true}
					key={route.key}
					path={route.path}
					component={route.component}
				/>
			))}
		</Switch>
	);
};
