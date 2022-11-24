const { Sequelize, DataTypes, Model, STRING } = require("sequelize")
const db = require("../db/db")

class Posts extends Model{}

Posts.init({
    likes: {
        type: DataTypes.INTEGER,
    },
    Commments: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pictureLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db
})

module.exports = Posts