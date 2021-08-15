import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import pkg from '../../../package.json';

const FooterContainer = styled.div`
	text-align: center;
`;

export default () => {
	return (
		<FooterContainer>
			<Typography.Link target="_blank" href={pkg.repository.url}>
				{pkg.repository.type}
			</Typography.Link>
		</FooterContainer>
	);
};
