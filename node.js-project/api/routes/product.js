const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const auths = require('../middleware/check-auth');


// store image in server in uploads

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
        cb(null, uniqueName);
    },
});

const handleMultipartData = multer({
    storage: storage,
    limits: { fileSize: 1000000 * 5 }
}).single("image")



const ProductsController = require('../controllers/product');

router.get('/',  ProductsController.getAllProducts);
router.post('/', auths.adminAuth, handleMultipartData,  ProductsController.createOneProduct);
router.get('/:productId',  ProductsController.getOneProduct);
router.patch('/:productId', auths.adminAuth, ProductsController.updateOneProduct);
router.delete('/:productId', auths.adminAuth, ProductsController.deleteOneProduct);

module.exports = router 
