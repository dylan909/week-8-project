const {User} = require('./Models')
const {Post} = require('./Models')
const db = require('./db/db')


async function seed(){

    await db.sync({ force: true })
    // User.bulkCreate([
    //     {
    //         name: 'Dylan',
    //         followers: 20,
    //         biography: 'Chillin',
    //         profilePicture: './profile-icon-9.png'
    //     },
    //     {
    //         name: 'Kalim',
    //         followers: 50,
    //         biography: 'Chillin',
    //         profilePicture: './profile-icon-9.png'
    //     },
    //     {
    //         name: 'Dylan',
    //         followers: 20,
    //         biography: 'Chillin',
    //         profilePicture: './profile-icon-9.png'
    //     }
    // ])
    await User.create({
        name: 'Dylan',
        followers: 20,
        biography: 'Chillin',
        profilePicture: './profile-icon-9.png'
    })
}
seed()