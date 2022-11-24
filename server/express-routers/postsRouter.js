const { Posts } = require('../Models');

const postRouter = require('express').Router()

//Getting all data from posts db 
postRouter.get('/allPosts', async (req, res) => {
    const post = await Posts.findAll()
    res.send(post)
})








module.exports = postRouter