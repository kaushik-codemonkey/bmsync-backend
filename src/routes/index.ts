import express from 'express';

const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/health", (req, res) => {
    res.send("All Okay!")
})


router.post('/upsync', (req, res) => {
    console.log("HERE")
    const jsonData = JSON.parse(req.file?.buffer.toString() || '');
    console.log(jsonData);
    res.send('File uploaded successfully');
})

export default router;