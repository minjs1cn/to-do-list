import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { Provider } from 'react-redux';
import { store } from '../../store';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { BaseName } from '../../config/route.config';

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

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter basename={BaseName}>
				<LayoutContainer>
					<Layout.Header>
						<Header />
					</Layout.Header>
					<LayoutContent>
						<AppRouter />
					</LayoutContent>
					<LayoutFooter>
						<Footer />
					</LayoutFooter>
				</LayoutContainer>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
