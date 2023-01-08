import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import Webcam from 'react-webcam';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Button from '@mui/material/Button';

function App() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      console.log('Submit ', file);

      const response = await fetch('http://726c-34-72-122-62.ngrok.io', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.close('http://localhost:3000', '_blank');
    window.open('http://localhost:8000', '_blank');
  };

  const videoConstraints = {
    width: 720,
    height: 720,
    facingMode: 'user',
  };
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    saveAs(imageSrc, 'image.jpg');
  }, [webcamRef]);

  return (
    <div className="m-auto w-6/12 p-2 pt-6">
      <Webcam
        className="camera1"
        audio={false}
        height={1060}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        videoConstraints={videoConstraints}
      />
      <div className="flex justify-between">
        <div className="icons__1 pt-6">
          <CameraAltIcon
            style={{
              fontSize: '3.5em',
              color: 'black',
              border: '1px solid ',
              borderRadius: '10px',
            }}
            onClick={capture}
          >
            Capture photo
          </CameraAltIcon>
        </div>
        <div className="icons__2 pt-6">
          <AccessibilityIcon
            style={{
              fontSize: '3.5em',
              color: 'black',
              border: '1px solid ',
              borderRadius: '10px',
            }}
            onClick={handleClick}
          ></AccessibilityIcon>
        </div>
      </div>
      <div className="pt-6">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          {error && <p>{error}</p>}

          <Button variant="outlined">Upload</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
