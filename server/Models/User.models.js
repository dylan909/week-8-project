const { Sequelize, DataTypes, Model, STRING } = require("sequelize")
const db = require("../db/db")

class User extends Model{}

User.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    followers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    biography: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db
})

module.exports = User
