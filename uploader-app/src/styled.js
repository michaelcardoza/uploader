import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
	width: 100%;
	max-width: 400px;
	padding: 2.5rem 2rem;
	border-radius: 12px;
	box-shadow: 0 4px 12px #0000001A;
	text-align: center;
`

export const Title = styled.h3.attrs(props => ({
	align: props.align || 'center'
}))`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	text-align: ${props => props.align};
	color: #4F4F4F;
	margin-top: 0;
`

export const Paragraph = styled.p.attrs(props => ({
	mb: props.mb || 0
}))`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	text-align: center;
	color: #828282;
	margin-top: 0;
	margin-bottom: ${props => props.mb}rem;
`

export const Button = styled.button`
	width: 100px;
	height: 32px;
	background: #2F80ED;
	border-radius: 8px;
	color: #FFFFFF;
	border: none;
	cursor: pointer;
	text-align: center;
	padding: 8px 10px;
	font-size: 12px;
`

export const ChooseFileButton = styled.label`
	height: 32px;
	background: #2F80ED;
	border-radius: 8px;
	color: #FFFFFF;
	border: none;
	cursor: pointer;
	text-align: center;
	padding: 8px 10px;
	font-size: 12px;

	input {
		display: none;
	}
`