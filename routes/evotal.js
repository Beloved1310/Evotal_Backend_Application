const multer = require('multer')
const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const auth = require('../middleware/auth')

const storage = require('../utilis/multer')

const upload = multer({ storage })

const registerEvotal = require('../controller/evotal/registerEvotal')
// const updateEvotal = require('../controller/Evotal/updateEvotal')
// const getEvotalId = require('../controller/Evotal/getEvotalId')
// const getAllEvotal = require('../controller/Evotal/getAllEvotal')
// const deleteEvotal = require('../controller/Evotal/deleteEvotal')
// const EvotalPagination = require('../controller/Evotal/EvotalPagination')
// const validateObjectId = require('../middleware/validateObjectId')

// router.get('/', asyncMiddleware(getAllEvotal))

// router.get('/:id', validateObjectId, asyncMiddleware(getEvotalId))
router.post('/', auth,  asyncMiddleware(registerEvotal))


// router.put('/:id', auth, upload.single('image'), asyncMiddleware(updateEvotal))

// router.delete('/:id', auth, asyncMiddleware(deleteEvotal))

// router.get('/Evotal/pagination', auth, asyncMiddleware(EvotalPagination))

module.exports = router
