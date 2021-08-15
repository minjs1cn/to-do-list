import { ITodoItem } from '.';

const key = 'state-todo';

const todoStorage = {
	set(value: ITodoItem[]) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	get() {
		return JSON.parse(localStorage.getItem(key) || '[]');
	},
};

export default todoStorage;
