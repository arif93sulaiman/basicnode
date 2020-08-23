const express = require('express')
const userController = require('./controller/User')
const { getAll, getById, createUser, updateUser, deleteUser } = require('./controller/User')
const { decode, encode } = require('./middlewares/auth')

const router = express.Router()


router
.get('/', decode, getAll)
.post('/middleware-demo', encode, (req, res) => {
    return res.status(200).json({ success: true, token: req.token})
})
.get('/:id', getById) 
.post('/', createUser) //create new resources 
.put('/:id',  updateUser)
.delete('/:id',  deleteUser)

module.exports = router