const express = require('express')
const userController = require('./controller/User')
const { getAll, getById, createUser } = require('./controller/User')

const router = express.Router()


router
.get('/', getAll)
.get('/:id', getById) 
.post('/', createUser) //create new resources 
.put('/:id',  createUser)
.delete('/:id',  createUser)

module.exports = router