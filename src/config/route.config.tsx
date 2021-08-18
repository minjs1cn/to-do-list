import loadable, { LoadableComponent } from '@loadable/component';

const Index = loadable(() => import('../pages/Index'));
const List = loadable(() => import('../pages/List'));

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
