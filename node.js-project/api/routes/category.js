const express = require('express');
const router = express.Router();
const checkAuths = require('../middleware/check-auth');

const CategoryController = require('../controllers/category');

router.post('/', checkAuths.adminAuth, CategoryController.createOneCategory);
router.delete('/:id', checkAuths.adminAuth, CategoryController.deleteOneCategory);
router.get('/', CategoryController.getAllCategories)

module.exports = router;