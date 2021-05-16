import React, { useState } from 'react';
import styled from 'styled-components';
import { HTTP } from '../http-common';
import { Title, Paragraph, ChooseFileButton } from '../styled';
import Icon from '../images/image.svg';

const DragAndDrop = styled.div`
	background: #F6F8FB;
	border: 2px dashed #97BEF4;
	box-sizing: border-box;
	border-radius: 12px;
	padding: 2rem;
	margin: 2rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;


	img {
		margin-bottom: 2rem;
	}
`

const DragAndDropArea = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	top: 0;
	z-index: 2;
`

const DragAndDropHover = styled.div`
	width: 100%;
	height: 100%;
	background: #3780EDE0;
	opacity: ${props => (props.isDraggable ? 1 : 0)};
	position: absolute;
	top: 0;
	z-index: 1;
	border-radius: 12px;
	transition: all .5s;
	color: #FFF;
	font-size: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Upload = ({setUploadingProgress, setImage, setScreen, setError}) => {
	const [isDraggable, setIsDraggable] = useState(false);

	const upload = async (filename) => {
		console.log(filename);
		if (filename && (filename.type === 'image/png' || filename.type === 'image/jpg' || filename.type === 'image/jpeg')) {
			// Change Screen
			setScreen('UPLOADING');

			// Form Data
			const formData = new FormData()
			formData.append('image', filename);

			// Upload
			const res = await HTTP.post('/api/uploads', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				onUploadProgress: (progressEvent) => {
					setUploadingProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
				},
			});

			// Upload Complete
			if (res.statusText === 'OK') {
				setImage(res.data.image);
				setScreen('UPLOAD_COMPLETE');
			}
		} else {
			setIsDraggable(false);
			setError('File type not allowed');
		}
	}

	const handleChange = async (e) => {
		const image = e.target.files[0];
		await upload(image);
	}

	const handleDrop = async (e) => {
		e.preventDefault();

		const image = e.dataTransfer.files[0];
		await upload(image);
	}

	const handleDragEnter = (e) => {
		e.preventDefault();

		setIsDraggable(true);
	}

	const handleDragLeave = (e) => {
		e.preventDefault();

		setIsDraggable(false);
	}

	return (
		<>
			<Title>Upload your image</Title>
			<Paragraph>File should be Jpeg, Png,...</Paragraph>
			<DragAndDrop>
				<DragAndDropArea
					onDrop={handleDrop}
					onDragOver={(e) => e.preventDefault()}
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
				/>
				<DragAndDropHover isDraggable={isDraggable}>+</DragAndDropHover>
				<img src={Icon} alt="Drag & Drop" />
				<Paragraph>Drag & Drop your image here</Paragraph>
			</DragAndDrop>
			<Paragraph mb={1}>OR</Paragraph>
			<ChooseFileButton>
				<input type="file" onChange={handleChange} />
				Choose a File
			</ChooseFileButton>
		</>
	)
}

export default Upload;