import React, { Suspense } from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/route.config';

export default () => {
	return (
		<BrowserRouter>
			<Layout>
				<Layout.Header>
					<Header />
				</Layout.Header>
				<Layout.Content>
					<Suspense fallback="">
						<Switch>
							{routes.map((route) => (
								<Route
									key={route.key}
									path={route.path}
									component={route.component}
								/>
							))}
						</Switch>
					</Suspense>
				</Layout.Content>
				<Layout.Footer>111</Layout.Footer>
			</Layout>
		</BrowserRouter>
	);
};
