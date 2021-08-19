import React from 'react';
import loadable, {
	DefaultComponent,
	LoadableComponent,
} from '@loadable/component';

const Lazy = (fn: () => Promise<DefaultComponent<Element>>) =>
	loadable(fn, {
		fallback: <div>loading....</div>,
	});

const Index = Lazy(() => import('../pages/Index'));
const List = Lazy(() => import('../pages/List'));

export interface IMenuItem {
	key: string;
	name: string;
	path: string;
	component: LoadableComponent<unknown>;
}

export const BaseName = import.meta.env.BASE_URL;

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
