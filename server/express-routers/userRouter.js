const userRouter  = require('express').Router()


userRouter.get('/myProfile', (req, res) => {
    res.sendStatus(300)
})



module.exports = userRouter