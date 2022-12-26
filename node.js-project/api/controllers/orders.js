const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');
const { productCount } = require('../controllers/products');

exports.getAllOrders = (req, res, next) => {
    if (req.userData.userType == 'user') {
        console.log(req.userData);
        Order
            .find({ user: req.userData.userId })
            .select()
            .sort("-created_at")
            .populate({
                path: 'product',
                populate: {
                    path: 'category'
                }
            })
            .populate('user')
            .exec()
            .then(orders => {
                return res.status(200).json({
                    count: orders.length,
                    orders: orders
                });
            })
            .catch(error => {
                next(error);
            })
        return
    }

    let o;
    if (req.userData.userType == 'admin' && req.query.all)
        o = Order.find()
    else {
        o = Order
            .find({ user: req.userData.userId })
    }

    o.select()
        .populate({
            path: 'product',
            populate: {
                path: 'category'
            }
        })
        .populate('user')
        .sort("-created_at")
        .exec()
        .then(orders => {
            res.status(200).json({
                count: orders.length,
                orders: orders
            });
        })
        .catch(error => {
            next(error);
        })
};

exports.saveOrders = (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let address = req.body.address;



    console.log(req.body.products);

    let carts
    try {
        carts = JSON.parse(JSON.stringify(req.body.products));
        if (!firstName.trim() || !lastName.trim() || !address.trim()) {
            res.status(400)
            res.json({
                error: {
                    message: 'firstName , lastName , address Required..'
                }
            })
            return
        }
    } catch (error) {
        res.status(400)
        if (!carts) {
            res.json({
                error: {
                    message: 'Products Required..'
                }
            })
            return
        }
        res.json({
            error: {
                message: 'firstName , lastName , address Required..'
            }
        })
        return
    }

    let orders = [];
    for (let i = 0; i < carts.length; i++) {
        orders.push(createOrder(req, carts[i], firstName, lastName, address));
    }


    Order.create(orders)
        .then(orders => {
            return res.status(201).json({
                message: 'Orders was created',
                orders
            });
        })
        .catch(error => {
            next(error);
        });
};

exports.getOneOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    Order
        .findById(orderId)
        .select()
        .populate('product user')
        .exec()
        .then(order => {
            return res.status(201).json(order);
        })
        .catch(error => {
            next(error);
        });
};

exports.updateOneOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    Order
        .update({ _id: orderId }, { $set: req.body })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Updated Order Successfully!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        });
};



exports.deleteOneOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    Order
        .remove({ _id: orderId })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'Deleted order!',
                result: result
            });
        })
        .catch(error => {
            next(error);
        });
};


function createOrder(req, productInfo, firstName, lastName, address) {
    return new Order({
        _id: mongoose.Types.ObjectId(),
        product: productInfo.productId,
        quantity: productInfo.quantity,
        price: productInfo.price,
        user: req.userData.userId,
        firstName,
        lastName,
        address
    });
}


async function getLast30DaysOrdersAmount() {
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    console.log(date.toDateString());

    return Order.aggregate(
        [{
                $match: {
                    "created_at": {
                        $gte: date,
                    }
                }
            },
            {

                '$group': {
                    _id: '',
                    totalAmount: {
                        '$sum': {
                            "$multiply": ['$price', '$quantity']
                        }
                    }
                },
            }
        ]
    ).then(r => {
        return r[0].totalAmount
    })
}


async function getLast30DaysOrderCount() {
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    console.log(date.toDateString());

    return Order.aggregate(
        [{
                $match: {
                    "created_at": {
                        $gte: date,
                    }
                }
            },
            {
                "$count": 'orderCount'
            }
        ]
    ).then(r => {
        console.log(r);

        return r[0].orderCount
    })
}
async function getTotalOrdersCount() {
    return Order.aggregate(
        [{
            "$count": 'orderCount'
        }]
    ).then(r => {
        console.log(r);

        return r[0].orderCount
    })
}



async function getLast30DaysProductWiseSelling() {
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    console.log(date.toDateString());
    return Order.aggregate(
        [{
                $match: {
                    "created_at": {
                        $gte: date,
                    }
                }
            },
            {

                '$group': {
                    _id: '$product',
                    quantity: {
                        '$sum': '$quantity'
                    },
                    totalSale: {
                        '$sum': {
                            '$multiply': ['$quantity', '$price']
                        }
                    }
                },
            },


        ]
    ).
    then(r => {
        let o = Array.from(r)
        let arr = [];
        o.forEach(e => {
            arr.push(Product.findOne({ _id: e._id })
                .then(product => {
                    e.product = product
                    return e
                        // console.log(product);
                }))
        })

        return Promise.all(arr)

    })
}

exports.summary = async function(req, res, next) {
    try {
        let result = await _summary();
        res.json({ result })
    } catch (er) {
        next(er)
    }
}

const { getLast30DaysRegisteredUser } = require('../controllers/user')
const { getTotalUserCount } = require('../controllers/user')

async function _summary() {
    let pc = await productCount();
    let productWise30DaysSummary = await getLast30DaysProductWiseSelling();
    let totalOrderAmountLast30Days = await getLast30DaysOrdersAmount();
    return {
        last30DaysSummary: {
            userRegistered: await getLast30DaysRegisteredUser(),
            sale: totalOrderAmountLast30Days,
            orders: await getLast30DaysOrderCount(),
            productWise30DaysSummary,
        },
        overAll: {
            products: pc,
            orders: await getTotalOrdersCount(),
            users: await getTotalUserCount(),
        }
    }
}