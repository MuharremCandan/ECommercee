const express = require('express');
const router = express.Router();
const auth = require('../middleware/check-auth');

const OrdersController = require('../controllers/order');

router.get('/', auth.userAuth, OrdersController.getAllOrders);
router.post('/', auth.userAuth, OrdersController.saveOrders);
router.get('/:orderId', auth.userAuth, OrdersController.getOneOrder);
router.patch('/:orderId', auth.userAuth, OrdersController.updateOneOrder);
router.delete('/:orderId', auth.userAuth, OrdersController.deleteOneOrder);

module.exports = router;