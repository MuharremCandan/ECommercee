const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const database = require("./api/database/database")

//import AdminJSMongoose from '@adminjs/mongoose';

const userRoutes = require("./api/routes/user");
const productRoutes = require("./api/routes/product");
const categoryRoutes = require("./api/routes/category");
const orderRoutes = require("./api/routes/order")
const adminRoutes = require("./api/adminjs/adminjs")
const imageRoutes = require("./api/routes/image")

const app = express();
require('dotenv').config({
    path: '.env',
});

// Use body parser middleware to parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// Log request data
app.use(morgan("dev"));

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))
app.use(cors())

// Routes which should handle requests
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/images", imageRoutes);
app.use("/admin",adminRoutes)


//page not found 
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        msg:"Page not found",
    });
})


// run server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on localhost: ${process.env.PORT} 
    open your browser on http://localhost:${process.env.PORT}/`);
});
