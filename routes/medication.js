const multer = require('multer')
const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const auth = require('../middleware/auth')

const storage = require('../utilis/multer')

const upload = multer({ storage })

const loadMedication = require('../controller/medications/loadmedication')

router.post(
  '/:id',
  auth,
  upload.single('image'),
  asyncMiddleware(loadMedication),
)

module.exports = router
