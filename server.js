const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//list router
const userRouter = require('./user')

const app = express()
//for different domain back and front end application
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extend: true}))

const port = 3000

app.use('/user', userRouter)

const server = http.createServer(app)
server.listen(port)
server.on('listening', ()=>{
    console.log('listening on port', port)
})
