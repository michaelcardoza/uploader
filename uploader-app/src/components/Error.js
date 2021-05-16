import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #ffdada;
  padding: 6px 8px;
  border-radius: 5px;
  color: #ff6767;
  border: 1px solid #ff6767;
  margin-bottom: 1rem;

	button {
		background: transparent;
    border: none;
    color: #ff6767;
    font-weight: bold;
	}
`;

const Error = ({error, setError}) => {
	const handleCloseError = (e) => {
		e.preventDefault();

		setError('')
	}

	return (
		<StyledError>
			<span>{error}</span>
			<button onClick={handleCloseError}>X</button>
		</StyledError>
	)
}

export default Error;