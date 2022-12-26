
const mongoose = require('mongoose');
const Product = require('../models/product');
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'djhfhrkaq',
    api_key: '458223217782725',
    api_secret: 'h6ABMzba8tDqEhvIpVL4ACgYoWk'
});


var img_path = ""


exports.getAllProducts = (req, res, next) => {

    let filter = {
        price: {
            "$lte": 9999999999,
            "$gte": 0
        }
    }
    if (!isNaN(req.query.max)) {
        filter.price["$lte"] = req.query.max
    }
    if (req.query.category) {
        filter.category = req.query.category
    }
    if (!isNaN(req.query.min)) {
        filter.price["$gte"] = req.query.min
    }

    console.log(req.query.min);
    console.log(filter);

    let q = Product.find(filter)
    q.populate('product_category_id')
        // .select('_id name price')
        .exec()
        .then(products => {
            const response = {
                success: true,
                message: "All products",
                count: products.length,
                products: products.map(product => {
                    return {
                        _id: product._id,
                        product_name: product.product_name,
                        product_desc: product.product_desc,
                        product_size: product.product_size,
                        product_graphic: product.product_graphic,
                        product_processor: product.product_processor,
                        product_ram: product.product_ram,
                        product_quantity: product.product_quantity,
                        product_rating: product.product_rating,
                        product_price: product.product_price,
                        product_images: product.product_images,
                        product_category_id: product.product_category_id,
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(error => {
            next(error);
        })
};



exports.createOneProduct = (req, res, next) => {
    const product = createProduct(req, res, next);
    product
        .save()
        .then(product => {
            res.status(200).json({
                success: true,
                message: 'Product Created Successfully!',
                product: {
                    _id: product._id,
                    product_name: product.product_name,
                    product_desc: product.product_desc,
                    product_size: product.product_size,
                    product_graphic: product.product_graphic,
                    product_processor: product.product_processor,
                    product_ram: product.product_ram,
                    product_quantity: product.product_quantity,
                    product_rating: product.product_rating,
                    product_price: product.product_price,
                    product_images: product.product_images,
                    product_category_id: product.product_category_id,
                }
            });

        })
        .catch(error => {
            next(error);
        });
};
function uploadImage(req, res, next) {

    const filePath = req.file.path

    if (!filePath) {
        return
    }

    cloudinary.v2.uploader.upload(filePath, (error, result) => {
        if (error) {
            return
        } else {

            img_path = result.url;
            console.log(img_path)
            return img_path



        }
    })
    return img_path
};



exports.getOneProduct = (req, res, next) => {
    const id = req.params.productId;
    Product
        .findById(id)
        .select('_id product_name product_desc product_size product_graphic product_processor product_ram product_quantity product_rating product_price product_category_id product_images')
        .populate('product_category_id')
        .exec()
        .then(product => {
            if (product) {
                res.status(200).json({
                    success: true,
                    message: "Product Get Successfully",
                    product: product
                }
                );
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Product Not Found!'
                });
            }
        })
        .catch(error => {
            next(error);
        });
};

exports.updateOneProduct = (req, res, next) => {
    const productId = req.params.productId;
    // const updateOps = {};
    // for (const prop of req.body) {
    // 	updateOps[prop.propName] = prop.propValue;
    // }

    Product
        .update({ _id: productId }, { $set: req.body })
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: 'Updated Product Successfully!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        })
};

exports.deleteOneProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product
        .remove({ _id: productId })
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: 'Deleted Product Successfully!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        });
};

function createProduct(req, res, next) {
    return new Product({
        _id: new mongoose.Types.ObjectId(),
        product_name: req.body.product_name,
        product_desc: req.body.product_desc,
        product_size: req.body.product_size,
        product_graphic: req.body.product_graphic,
        product_processor: req.body.product_processor,
        product_ram: req.body.product_ram,
        product_quantity: req.body.product_quantity,
        product_rating: req.body.product_rating,
        product_price: req.body.product_price,
        product_images: uploadImage(req, res, next),
        product_category_id: req.body.product_category_id,

    });
}


exports.productCount = () => {
    return Product.aggregate(
        [{
            "$count": "productCount"
        }]
    ).then(r => {
        return r[0].productCount
    })
}