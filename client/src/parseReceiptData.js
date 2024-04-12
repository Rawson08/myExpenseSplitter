const express = require('express');
const multer = require('multer');
const tesseract = require('node-tesseract-ocr');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('receipt'), async (req, res) => {
  try {
    const ocrResult = await tesseract.recognize(req.file.path);
    // Parse the OCR result and structure it
    const structuredData = parseReceiptData(ocrResult);
    res.json(structuredData);
  } catch (error) {
    res.status(500).send('Error processing the receipt');
  }
});

function parseReceiptData(text) {
  // Implement your parsing logic here
}

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
