import express from 'express';
import multer from 'multer';
const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6,
    },
});

router.get("/health", (req, res) => {
    res.send("Endpoint is up!")
})


router.post('/upsync', upload.single("jsonFile"), (req, res) => {
    console.log("HERE", JSON.stringify(req.body))
    const { email, passphrase } = req.body
    if (!req.file || req.file.mimetype !== 'application/json') {
        res.status(400).send("Incorrect input, expected json file in the field 'jsonFile'");
    }
    if (!email || !passphrase) {
        res.status(400).send(`Missing ${!email ? 'email' : !passphrase ? 'passphrase' : 'few required fields'}`)
    }
    const jsonData = JSON.parse(req.file?.buffer.toString() || '');
    console.log(jsonData);
    res.send('File uploaded successfully');
})

export default router;