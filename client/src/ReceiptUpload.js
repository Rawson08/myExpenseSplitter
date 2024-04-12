import React, { useState } from 'react';

function ReceiptUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');

    const handleFileChange = event => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewSrc(URL.createObjectURL(file)); // Create a URL for the file
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('receipt', selectedFile);

        try {
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('OCR Result:', data.text);
            } else {
                console.error('Error in file upload');
            }
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {previewSrc && <img src={previewSrc} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />}
            <button onClick={handleSubmit}>Upload Receipt</button>
        </div>
    );
}

export default ReceiptUpload;
