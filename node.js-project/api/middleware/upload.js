const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

require('dotenv').config({
    path: '.env',
});

var storage = new GridFsStorage({
    url: process.env.MONGODB_URI, 
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}`;
            return filename;
        }

        return {
            bucketName: 'images',
            filename: `${Date.now()}`
        };
    }
});

var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;