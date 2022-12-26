const mongoose = require('mongoose');
const Product = require('../models/product');
const productImage = require('../models/product.image');
const cloudinary = require('cloudinary')
const Image = require('../models/product.image');

cloudinary.config({
    cloud_name: 'djhfhrkaq',
    api_key: '458223217782725',
    api_secret: 'h6ABMzba8tDqEhvIpVL4ACgYoWk'
});

exports.createOneImage =(req, res , next) => {
    
    const filePath = req.file.path

    if (!filePath) {
            return
    }

    cloudinary.v2.uploader.upload(filePath, (error, result) => {
            if (error) {
                res.send(error.message)
            } else {
                const image = createImage(req, result);
                image
                .save()
                    .then(image => {
                        res.status(200).json({
                            success: true,
                            message: 'Image saved successfully!',
                            image: {
                                _id: image._id,
                                product_id: image.product_id,
                                image_path: image.image_path,
                            }
                        });
                    })
                    .catch(error => {
                        next(error)
                    })
            }
        })
    };

function createImage(req, res) {
    return new productImage({
        _id: mongoose.Types.ObjectId(),
        product_id: req.body.product_id,
        image_path: res.url,
    });
}


exports.getImagesByProductId = (req, res, next)=>{
    const product_id = req.params.productId;
    let filter = {
        product_id: product_id
    }
    Image
    .find(filter)
    .populate()
    .exec()
    .then(images => {
        const response = {
            success: true,
            message: "All Images",
            count: images.length,
            images: images.map(image => {
                return {
                    _id : image._id,
                    product_id: image.product_id,
                    image_path : image.image_path
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(error => {
            next(error);
    })
}