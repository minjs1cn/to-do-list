import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';

export default () => {
	return (
		<BrowserRouter>
			<Layout>
				<Layout.Header>
					<Header />
				</Layout.Header>
				<Layout.Content>
					<Switch>
						<Route exact path="/" component={List} />
						<Route exact path="/detail" component={Detail} />
					</Switch>
				</Layout.Content>
				<Layout.Footer>111</Layout.Footer>
			</Layout>
		</BrowserRouter>
	);
};
