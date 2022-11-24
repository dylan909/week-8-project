const {User} = require('./Models')
const {Posts} = require('./Models')
const db = require('./db/db')
const { post } = require('./express-routers/postsRouter')


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

  Posts.bulkCreate([
        
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