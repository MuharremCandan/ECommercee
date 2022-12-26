const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const uploadController = require("../controllers/image");
const auths = require('../middleware/check-auth');


const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        cb(null , uniqueName);
    },
});

const handleMultipartData =   multer({
    storage:storage,
    limits: {fileSize: 1000000 * 5}
}).single("image")




router.post("/upload", auths.adminAuth, handleMultipartData, uploadController.createOneImage);
router.get("/:productId", uploadController.getImagesByProductId);


module.exports = router;
