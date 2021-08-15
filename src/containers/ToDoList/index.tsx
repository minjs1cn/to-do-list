import { List } from 'antd';
import React, { useState } from 'react';
import {
	useAppSelector,
	useAppDispatch,
	selectToDoList,
	todoSlice,
	EToDoStatus,
} from '../../stores';
import ItemEditor from './ItemEditor';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

const ToDoList: React.FC = () => {
	const list = useAppSelector(selectToDoList);
	const dispatch = useAppDispatch();

	const [editUuid, setEditUuid] = useState('');
	const [editVisible, setEditVisible] = useState(false);

	const onChange = (value: EToDoStatus) => {
		dispatch(todoSlice.actions.pick(value));
	};

	const onToggle = (uuid: string) => {
		dispatch(todoSlice.actions.toggle(uuid));
	};

	const onEdit = (uuid: string) => {
		setEditVisible(true);
		setEditUuid(uuid);
	};

	const onAdd = () => {
		setEditVisible(true);
		setEditUuid('');
	};

	return (
		<>
			<List
				header={<ListHeader onAdd={onAdd} onChange={onChange} />}
				dataSource={list}
				renderItem={item => (
					<ListItem
						key={item.uuid}
						item={item}
						onToggle={() => onToggle(item.uuid)}
						onEdit={() => onEdit(item.uuid)}
					/>
				)}
			/>
			<ItemEditor
				uuid={editUuid}
				visible={editVisible}
				onClose={() => setEditVisible(false)}
			/>
		</>
	);
};

export default ToDoList;
