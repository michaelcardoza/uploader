import React, { useState } from 'react';
import { AppContainer, Wrapper } from './styled';

import Upload from './components/Upload';
import Uploading from './components/Uploading';
import UploadSuccess from './components/UploadSuccess';
import Error from './components/Error';

function App() {
	const [error, setError] = useState('');
	const [image, setImage] = useState('');
	const [screen, setScreen] = useState('UPLOAD');
	const [uploadingProgress, setUploadingProgress] = useState(0);

	return (
		<AppContainer>
			<Wrapper>
				{error && (<Error error={error} setError={setError} />)}
				{
					screen === 'UPLOAD' && (
						<Upload
							setUploadingProgress={setUploadingProgress}
							setImage={setImage}
							setScreen={setScreen}
							setError={setError}
						/>
					)
				}
				{
					screen === 'UPLOADING' && (
						<Uploading
							uploadingProgress={uploadingProgress}
							setScreen={setScreen}
						/>
					)
				}
				{screen === 'UPLOAD_COMPLETE' && (<UploadSuccess image={image} />)}
			</Wrapper>
		</AppContainer>
	);
}

export default App;
