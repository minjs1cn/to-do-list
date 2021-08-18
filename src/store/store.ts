import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import todo from './todo';
import todoStorage from './todo/todoStorage';

export const store = configureStore({
	reducer: {
		todo,
	},
});

store.subscribe(() => {
	console.log(store.getState());
	todoStorage.set(store.getState().todo.list);
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
