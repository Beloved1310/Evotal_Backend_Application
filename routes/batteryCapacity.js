const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const batteryCapacity = require("../controller/BatteryHistory/batteryCapacity");


router.get('/', asyncMiddleware(batteryCapacity))
module.exports = router