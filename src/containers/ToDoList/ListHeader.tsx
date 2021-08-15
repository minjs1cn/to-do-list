import React from 'react';
import { Space, Radio, Button } from 'antd';
import { EToDoStatus } from '../../stores';

interface IProps {
	onAdd: () => void;
	onChange: (value: EToDoStatus) => void;
}

const todoSelectors = [
	{
		key: 'all',
		value: -1,
		name: 'all',
	},
	{
		key: 'unCompleted',
		value: 0,
		name: 'unCompleted',
	},
	{
		key: 'completed',
		value: 1,
		name: 'completed',
	},
];

const ListHeader: React.FC<IProps> = ({ onAdd, onChange }) => {
	return (
		<Space>
			<Radio.Group
				defaultValue={todoSelectors[0].value}
				onChange={e => onChange(e.target.value)}>
				{todoSelectors.map(selector => (
					<Radio.Button key={selector.key} value={selector.value}>
						{selector.name}
					</Radio.Button>
				))}
			</Radio.Group>
			<Button type="primary" onClick={onAdd}>
				add
			</Button>
		</Space>
	);
};

export default ListHeader;
