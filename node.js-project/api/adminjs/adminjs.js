const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const Users = require("../models/user")




//AdminJs
const adminJs = new AdminJS({
    resources: [],
});



const router = AdminJSExpress.buildRouter(adminJs);

module.exports = router


