const { Sequelize } = require('sequelize')
const { User } = require('../Models')
const userRouter  = require('express').Router()
const { body, validationResult } = require('express-validator')

// To get user's profile, if exists 
userRouter.get('/myProfile', async (req, res) => {
    let user  = await User.findByPk(1)
    res.send(user).sendStatus(200)    
})

// Will check if the user already exists, if they do return the user, if not create it
userRouter.post('/createUser', 
    // body('email').isEmail(),
    // body('password').isLength({ min: 5 }),
    async (req, res) => {

    try {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        let [newUser, created] = await User.findOrCreate({
            where:{
                email: req.body.email
            },
            defaults: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                followers: req.body.followers,
                biography: req.body.biography,
                profilePicture: req.body.profilePicture
            }
        })
        if (created === true){
            res.status(201).send(newUser)
        }else{
            res.status(200).send(console.log('User Already Exists!'))
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = userRouter