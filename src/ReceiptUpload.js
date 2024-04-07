import React, { useState } from 'react';

function ReceiptUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
    // TODO: Additional file handling logic for future
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('receipt', selectedFile);

    try {
      const response = await fetch('/api/upload', { 
        method: 'POST',
        body: formData
      });
      // TODO: Handle response here
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload Receipt</button>
    </div>
  );
}

export default ReceiptUpload;
