import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findIndex } from 'lodash-es';
import { nanoid } from 'nanoid';
import { TAppState } from '..';
import todoStorage from './todoStorage';

export enum EToDoStatus {
	All = -1,
	UnCompleted = 0,
	Completed = 1,
}

export interface ITodoItemBase {
	title: string;
	time: string;
}

export interface ITodoItem extends ITodoItemBase {
	uuid: string;
	status: EToDoStatus;
}

export interface IToDoState {
	list: ITodoItem[];
	filter: EToDoStatus;
}

const initialState: IToDoState = {
	list: todoStorage.get(),
	filter: EToDoStatus.All,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<ITodoItemBase>) => {
			state.list.push({
				...action.payload,
				uuid: nanoid(),
				status: EToDoStatus.UnCompleted,
			});
		},
		update: (state, { payload }: PayloadAction<ITodoItem>) => {
			let index = findIndex(state.list, item => item.uuid === payload.uuid);
			if (index !== -1) {
				state.list[index] = {
					...state.list[index],
					...payload,
				};
			}
		},
		delete: (state, action: PayloadAction<string>) => {
			let index = findIndex(state.list, item => item.uuid === action.payload);
			if (index !== -1) {
				state.list.splice(index, 1);
			}
		},
		toggle: (state, action: PayloadAction<string>) => {
			let index = findIndex(state.list, item => item.uuid === action.payload);
			if (index !== -1) {
				state.list[index].status =
					state.list[index].status === EToDoStatus.Completed
						? EToDoStatus.UnCompleted
						: EToDoStatus.Completed;
			}
		},
		pick: (state, action: PayloadAction<EToDoStatus>) => {
			state.filter = action.payload;
		},
	},
});

export const selectToDoList = createSelector(
	(state: TAppState) => state.todo.list,
	(state: TAppState) => state.todo.filter,
	(list, filter) => {
		switch (filter) {
			case EToDoStatus.Completed:
				return list.filter(item => item.status === EToDoStatus.Completed);
			case EToDoStatus.UnCompleted:
				return list.filter(item => item.status === EToDoStatus.UnCompleted);
			default:
				return list;
		}
	},
);

export const selectToDoItem = createSelector(
	(state: TAppState) => state.todo.list,
	(state: TAppState, uuid: string) => uuid,
	(list, uuid) => {
		let item = list.filter(item => item.uuid === uuid);
		if (item.length) return item[0];
		return null;
	},
);

export default todoSlice.reducer;
