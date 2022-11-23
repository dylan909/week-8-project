const express = require('express')
const app = express()
const cors = require('cors')
const { userRouter } = require('./express-routers')
const port = 4000


app.use(cors())

app.use('/user', userRouter)




app.listen(port, () => {
    console.log(`sever on port http//localhost:${port}/`)
})