import React, { useRef } from 'react';
import styled from 'styled-components';
import { Title, Button } from '../styled';
import SuccessIconUrl from '../images/ok.png';

const CopyLink = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: #F6F8FB;
	border: 1px solid #E0E0E0;
	border-radius: 8px;
	padding: 12px 8px;
	text-align: left;

	${Button} {
		position: absolute;
		right: 4px;
	}

	input {
		border: none;
		width: 100%;
		height: 100%;
		background: transparent;
		outline: none;

		&::selection {
			background: transparent;
		}
	}
`;

const Image = styled.img`
	width: 100%;
	margin-bottom: 1rem;
	overflow: hidden;
	border-radius: 12px;
`

const SuccessIcon = styled.img`
	height: 50px;
	margin-bottom: 1rem;
`

const UploadSuccess = ({image}) => {
	const linkEl = useRef(null);

	const handleClick = (e) => {
		linkEl.current.select();
		document.execCommand('copy');
	}

	return (
		<>
			<SuccessIcon src={SuccessIconUrl} />
			<Title>Uploaded Successfully!</Title>
			<Image src={`http://localhost:5000/media/${image}`} />
			<CopyLink>
				<input
					ref={linkEl}
					type={'text'}
					value={`http://localhost:5000/media/${image}`}
					readOnly
				/>
				<Button onClick={handleClick}>Copy</Button>
			</CopyLink>
		</>
	)
}

export default UploadSuccess;