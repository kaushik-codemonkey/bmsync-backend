import express from 'express';
import multer from 'multer';
import crypt, { storableData } from '../utils/crypt';
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


router.post('/upsync', upload.single("jsonFile"), async (req, res) => {
    console.log("HERE", JSON.stringify(req.body))
    const { email, passphrase } = req.body
    if (!req.file || req.file.mimetype !== 'application/json') {
        res.status(400).send("Incorrect input, expected json file in the field 'jsonFile'");
        return;
    }
    else if (!email || !passphrase) {
        res.status(400).send(`Missing ${!email ? 'email' : !passphrase ? 'passphrase' : 'few required fields'}`)
        return;
    }
    try {
        const jsonData = JSON.parse(req.file?.buffer.toString() || '');
        if (!jsonData) {
            res.status(400).send('Not a valid json file');
        }
    } catch (e) {
        res.status(400).send('Not a valid json file');
    }
    // hash the passphrase & store it
    const encryptedText = await crypt.encrypt(passphrase);
    console.log(encryptedText);

    // const isMatch = await crypt.decrypt(encryptedText, passphrase)
    const storableObj: storableData = {
        email: email,
        encryptedPass: encryptedText,
        //TODO: or you could upload the file and send just the reference key here - 
        // if storing as a whole object is not possible
        jsonFile: convertMulterFileToBlob(req.file)
    }
    res.send('File uploaded successfully');
})

function convertMulterFileToBlob(file: Express.Multer.File) {
    const FormData = require('form-data');
    const formData = new FormData();
    formData.append('file', Buffer.from(file.buffer), file.originalname);

    return formData;
}


export default router;