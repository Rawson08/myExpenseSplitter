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
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json(); // Get the response data

                console.log('OCR Result:', data.text); // Process/display this data in your UI
            } else {
                console.error('Error in file upload');
            }
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
