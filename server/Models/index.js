const Posts = require("./Posts.model");
const User = require("./User.models");



User.hasMany(Posts)
Posts.hasOne(User)


module.exports = { Posts, User }