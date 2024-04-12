const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });


app.post('/api/upload', upload.single('receipt'), async (req, res) => {
    console.log("File received:", req.file); //Log
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    try {
        const ocrResult = await tesseract.recognize(req.file.path);
        console.log("OCR result:", ocrResult); // Log the OCR result
        // Optionally, process the OCR result into a structured format
    
        res.json({ text: ocrResult }); // Send OCR result back to frontend
      } catch (error) {
        res.status(500).send('Error processing the file');
      }
    });


app.get('/api', (req, res) => {
  res.json({message:'Hello from server!'});
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
