import { lazy, LazyExoticComponent } from 'react';

const Index = lazy(() => import('../pages/Index'));
const List = lazy(() => import('../pages/List'));

export interface IMenuItem {
	key: string;
	name: string;
	path: string;
	component: LazyExoticComponent<() => JSX.Element>;
}

export default [
	{
		key: 'home',
		name: '首页',
		path: '/',
		component: Index,
	},
	{
		key: 'list',
		name: '代办事项',
		path: '/list',
		component: List,
	},
];
