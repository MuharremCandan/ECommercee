const mongoose = require('mongoose');
const Product = require('../models/product');
const Category = require('../models/category');

exports.getAllCategories = (req, res, next) => {

    Category
        .find()
        .exec()
        .then(cats => {
            return res.json({ categories: cats })
        })
        .catch(error => {
            next(error);
        })
};

exports.createOneCategory = (req, res, next) => {
    createCategory(req).save()
        .then(category => {
            return res.status(201).json({
                message: 'Category was created',
                category: category
            });
        })
        .catch(error => {
            next(error);
        });
};

exports.deleteOneCategory = (req, res, next) => {
    const categoryId = req.params.categoryId;
    Category
        .remove({ _id: categoryId })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Deleted Category!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        });
};

function createCategory(req) {
    return new Category({
        _id: mongoose.Types.ObjectId(),
        category_name: req.body.category_name
    });
}