const mongoose = require('mongoose');
var passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { json } = require('express');

exports.isAdmin = (req, res, next) => {
    if (req.userData.userType == 'admin')
        return res.json(true)
    else
        return res.json(false)
}

exports.signUp = (req, res, next) => {
    User
        .find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                a = passwordHash.generate(req.body.password);
                console.log("password hash ",a);
                return  a
                
            }
            const error = new Error();
            error.message = 'User Exists!';
            const response = {
                success: false,
                message: error.message,
            }
            res.status(500).json(response)
        })
        .then(hash => {
            const user = createUser(req.body.name,req.body.surname, req.body.phone, req.body.email, hash);
            return user.save();
        })
        .then(result => {
            return res.status(201).json({
                message: 'User created successfully!'
            })
        })
        .catch((error) => {
            next(error);
        });
};

exports.getProfile = (req, res, next) => {

    User
        .findOne({ email: req.userData.email })
        .select('email _id name surname phone')
        .exec()
        .then(user => {
            if (user.length < 1) {
                const error = new Error();
                error.message = 'Auth Failed!';
                throw error;
            }
            return user;
        })
        .then(user => {
            if (user) {
                return res.json({ user })
            }
        })
        .catch(error => {
            next(error);
        });
};
exports.getAll = (req, res, next) => {

    User.find()
        .select()
        .exec()
        .then(users => {
            return res.json({ users })
        })
        .catch(error => {
            next(error);
        });
};


exports.logIn = (req, res, next) => {
    let email = undefined,
        userId = undefined;
    userType = undefined;
    User
        .find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(200).json({
                    message: 'Auth Failed!',
                });
            }
            email = user[0].email;
            userType = user[0].userType;
            userId = user[0]._id;
            return passwordHash.verify(req.body.password, user[0].password);
        })
        .then(result => {
            if (result) {
                const token = jwt.sign({
                        email: email,
                        userId: userId,
                        userType
                    },
                    process.env.JWT_KEY, {
                        expiresIn: "1h"
                    }
                );
               
                return res.status(200).json({
                    message: 'Auth Successful!',
                    token: token
                });
            }
            const error = new Error();
            error.message = 'Auth Failed!';
            throw error;
        })
        .catch(error => {
            next(error);
        });
};

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    User
        .remove({ _id: userId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User Deleted Successfully!'
            });
        })
        .catch(error => {
            error.message = 'Could Not Delete User!';
            next(error);
        });
};

function createUser(name, surname, phone, email, hash) {
    return new User({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        name: name,
        surname:surname,
        phone: phone,
        password: hash
    });
}


//
exports.getLast30DaysRegisteredUser = async function() {
    let date = new Date();
    date.setMonth(date.getMonth() - 1)
    console.log(date.toDateString());
    return User.aggregate(
        [{
                $match: {
                    "created_at": {
                        $gte: date,
                    }
                }
            },
            {
                "$count": 'userCount'
            }


        ]
    ).then(r => {
        return r[0].userCount
    })
}

exports.getTotalUserCount = async function() {

    return User.aggregate(
        [{
            "$count": 'userCount'
        }]
    ).then(r => {
        return r[0].userCount
    })
}