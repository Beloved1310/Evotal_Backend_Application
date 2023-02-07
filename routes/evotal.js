const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const auth = require('../middleware/auth')

const registerEvotal = require('../controller/evotal/registerEvotal')
const getEvotalMedication = require('../controller/evotal/getEvotalMedication')
const availableEvtol = require('../controller/evotal/availableEvtol')
const evtolBatteryLevel = require('../controller/evotal/evtolBatteryLevel')

router.get('/:evotalId', asyncMiddleware(getEvotalMedication))
router.get('/available/loading', asyncMiddleware(availableEvtol))
router.get(
  '/available/battery/level/:evotaId',
  asyncMiddleware(evtolBatteryLevel),
)
router.post('/', auth, asyncMiddleware(registerEvotal))

module.exports = router
