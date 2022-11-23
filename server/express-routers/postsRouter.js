const postRouter = require('express').Router()


postRouter.get("/allPosts", (req, res) => {
    res.sendStatus(300)
})

module.exports = postRouter