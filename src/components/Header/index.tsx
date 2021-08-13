import { Menu } from 'antd';
import { findIndex } from 'lodash-es';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import menus from '../../config/route.config';

interface IProps {}

const Header: React.FC<IProps> = () => {
	const history = useHistory();
	const [selectedKey, setSelectedKey] = useState('');

	useEffect(() => {
		let index = findIndex(
			menus,
			(menu) => menu.path === history.location.pathname
		);
		if (index === -1) {
			index = 0;
		}
		setSelectedKey(menus[index].key);
	});

	const onMenuClick: MenuClickEventHandler = ({ key }) => {
		setSelectedKey(key);
	};

	return (
		<Menu
			mode="horizontal"
			theme="dark"
			onClick={onMenuClick}
			selectedKeys={[selectedKey]}>
			{menus.map((menu) => (
				<Menu.Item key={menu.key}>
					<Link to={menu.path}>{menu.name}</Link>
				</Menu.Item>
			))}
		</Menu>
	);
};

export default Header;
