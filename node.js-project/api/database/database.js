const mongoose = require('mongoose');
require('dotenv').config({
    path: '.env',
});


// connect to db
db = mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
    console.log("mongodb connection established successfully");
});
mongoose.connection.on("error", () => {
    console.log("mongodb connection Failed");
});

module .exports = db