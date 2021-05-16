import React from 'react';
import styled from 'styled-components';
import { Title } from '../styled';

const Progress = styled.progress`
	width: 100%;
`;

const Uploading = ({uploadingProgress}) => {
	return (
		<>
			<Title align={'left'}>Uploading...</Title>
			<Progress value={uploadingProgress} max={100} />
		</>
	)
}

export default Uploading;