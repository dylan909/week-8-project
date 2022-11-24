const express = require('express')
const app = express()
const cors = require('cors')
const { userRouter, postRouter } = require('./express-routers')
const port = 4000


app.use(cors())

app.use('/user', userRouter);

app.use('/post', postRouter);

app.get('/post/allPosts'( req, res ) => {
    
})


app.listen(port, () => {
    console.log(`sever on port http//localhost:${port}/`)
})