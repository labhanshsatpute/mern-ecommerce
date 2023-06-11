const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

// For Local Disk Storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './storage')
//     },
//     filename: (req, file, cb) => {
//         const fileName = crypto.randomBytes(20).toString('hex');
//         cb(null, fileName + path.extname(file.originalname));
//     }
// });

// For Cloud Bucket
const spacesEndpoint = new aws.Endpoint(process.env.STORAGE_BUCKET_ENDPOINT);
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    region: process.env.STORAGE_BUCKET_REGION,
    credentials: {
        secretAccessKey: process.env.STORAGE_BUCKET_SECRET,
        accessKeyId: process.env.STORAGE_BUCKET_KEY,
    }
});

const storage = multerS3({
    s3: s3,
    bucket: process.env.STORAGE_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname);
    }
});

const fileUpload = multer({ storage: storage });

module.exports = fileUpload;