const {User} = require('./Models')
const {Posts} = require('./Models')
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


    await Posts.bulkCreate([
        
    {
        likes: 10,
        comments: "Hi there",
        pictureLink: './profile-icon-9.png',
        caption: "this is a pic",
    },
    

    {
        likes: 5,
        comments: "This is a comment",
        pictureLink: './profile-icon-9.png',
        caption: "this is a pic",
    },

    
    {
        likes: 20,
        comments: "Hello World",
        pictureLink: './profile-icon-9.png',
        caption: "this is a pic",
    },


    {
        likes: 30,
        comments: "hi there again",
        pictureLink: './profile-icon-9.png',
        caption: "this is a pic",
    },

    {
        likes: 40,
        comments: "Dummy data",
        pictureLink: './profile-icon-9.png',
        caption: "this is a pic",
    },



    ], {
        validate:true
    })
    
}
seed()