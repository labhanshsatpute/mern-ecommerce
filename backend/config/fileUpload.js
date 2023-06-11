const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage')
    },
    filename: (req, file, cb) => {
        const fileName = crypto.randomBytes(20).toString('hex');
        cb(null, fileName + path.extname(file.originalname));
    }
});

const fileUpload = multer({ storage: storage });

module.exports = fileUpload;