import { Button, DatePicker, Drawer, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import moment, { Moment } from 'moment';
import {
	ITodoItemBase,
	selectToDoItem,
	todoSlice,
	useAppDispatch,
	useAppSelector,
} from '../../store';

interface IProps {
	visible: boolean;
	uuid: string;
	onClose: () => void;
}

interface IFormItem extends Omit<ITodoItemBase, 'time'> {
	time: Moment;
}

const ItemEditor: React.FC<IProps> = ({ uuid, visible, onClose }) => {
	const item = useAppSelector(state => selectToDoItem(state, uuid));
	const dispatch = useAppDispatch();
	const [formRef] = Form.useForm<IFormItem>();

	useEffect(() => {
		if (item) {
			formRef.setFieldsValue({
				title: item.title,
				time: moment(item.time),
			});
		}
	}, [uuid]);

	const title = item ? 'update item' : 'add item';

	const onSave = () => {
		formRef
			.validateFields()
			.then(values => {
				formRef.resetFields();
				if (item) {
					dispatch(
						todoSlice.actions.update({
							...item,
							title: values.title,
							time: values.time.format('YYYY-MM-DD HH:mm:ss'),
						}),
					);
				} else {
					dispatch(
						todoSlice.actions.add({
							title: values.title,
							time: values.time.format('YYYY-MM-DD HH:mm:ss'),
						}),
					);
				}

				onClose();
			})
			.catch(info => {
				console.log(info);
			});
	};

	const disabledDate = (current: Moment) => {
		return (
			current && (current < moment().days(-1) || current > moment().days(6))
		);
	};

	const onDateOk = (value: Moment) => {
		console.log(value);
	};

	return (
		<Drawer
			visible={visible}
			width={300}
			onClose={onClose}
			title={title}
			footer={
				<Button type="primary" onClick={onSave}>
					save
				</Button>
			}>
			<Form form={formRef} layout="vertical">
				<Form.Item
					label="代办事项"
					name="title"
					rules={[
						{
							required: true,
							message: '请填写代办事项',
						},
					]}>
					<Input />
				</Form.Item>
				<Form.Item
					label="截止时间"
					name="time"
					rules={[
						{
							required: true,
							message: '请选择一个截止时间',
						},
					]}>
					<DatePicker
						inputReadOnly
						showTime
						disabledDate={disabledDate}
						onOk={onDateOk}
						showNow={false}
					/>
				</Form.Item>
			</Form>
		</Drawer>
	);
};

export default ItemEditor;
