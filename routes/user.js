const express = require('express')
const asyncMiddleware = require('../middleware/async.js')

const router = express.Router()

const signUp = require('../controller/user/signup')
const login = require('../controller/user/login')

router.post('/signup', asyncMiddleware(signUp))

router.post('/login', asyncMiddleware(login))

module.exports = router