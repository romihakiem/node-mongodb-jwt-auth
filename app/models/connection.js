const db = require("../configs/db");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connect = {};

connect.mongoose = mongoose;
connect.url = db.URL;
connect.user = require("./user");
connect.role = require("./role");

connect.ROLES = ["user", "admin", "moderator"];

module.exports = connect;
