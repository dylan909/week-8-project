const {User} = require('./Models')
const {Post} = require('./Models')
const db = require('./db/db')


async function seed(){

    await db.sync({ force: true })
    User.bulkCreate([
        {
            name: 'Dylan',
            email: 'email@gmail.com',
            password: "password",
            followers: 20,
            biography: 'Chillin',
            profilePicture: '../profile-icon-9.png'
        },
        {
            name: 'Kalim',
            email: 'email@gmail.com',
            password: "password",
            followers: 50,
            biography: 'Chillin',
            profilePicture: '../profile-icon-9.png'
        },
        {
            name: 'Dylan',
            email: 'email@gmail.com',
            password: "password",
            followers: 20,
            biography: 'Chillin',
            profilePicture: './profile-icon-9.png'
     }
    ])
}
seed()