const { Sequelize, DataTypes, Model, STRING } = require("sequelize")
const db = require("../db/db")

class User extends Model{}

User.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
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
