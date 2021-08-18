import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes, { BaseName } from './config/route.config';
import styled from 'styled-components';
import Footer from './components/Footer';

const LayoutContainer = styled(Layout)`
	min-height: 100%;
`;

const LayoutContent = styled(Layout.Content)`
	padding: 16px;
	background-color: #fff;
`;

const LayoutFooter = styled(Layout.Footer)`
	padding-top: 8px;
	padding-bottom: 8px;
`;

export default () => {
	return (
		<BrowserRouter basename={BaseName}>
			<LayoutContainer>
				<Layout.Header>
					<Header />
				</Layout.Header>
				<LayoutContent>
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
				</LayoutContent>
				<LayoutFooter>
					<Footer />
				</LayoutFooter>
			</LayoutContainer>
		</BrowserRouter>
	);
};