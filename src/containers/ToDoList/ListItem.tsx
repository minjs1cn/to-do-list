import { List, Tag } from 'antd';
import { Button } from 'antd/lib/radio';
import React from 'react';
import { EToDoStatus, ITodoItem } from '../../stores';

interface IProps {
	item: ITodoItem;
	onToggle: () => void;
	onEdit: () => void;
}

const ListItem: React.FC<IProps> = ({ item, onToggle, onEdit }) => {
	return (
		<List.Item
			actions={[
				<Button key="toggle" type="text" onClick={onToggle}>
					toggle
				</Button>,
				<Button key="edit" type="text" onClick={onEdit}>
					edit
				</Button>,
			]}>
			<List.Item.Meta
				title={item.time}
				description={item.title}></List.Item.Meta>
			{item.status === EToDoStatus.Completed ? (
				<Tag color="green">completed</Tag>
			) : (
				<Tag color="warning">unCompleted</Tag>
			)}
		</List.Item>
	);
};

export default ListItem;
