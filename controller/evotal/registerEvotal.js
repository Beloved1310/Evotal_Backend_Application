const Evotal = require('../../model/evotal')
const User = require('../../model/user')
const BatteryCapacityHistory = require('../../model/batterCapacity')
var cron = require('node-cron')

const registerEvotal = require('../../validation/registerEvotal')

module.exports = async (req, res) => {
  const { value, error } = registerEvotal(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })
  const { model, batteryCapacity, weightLimit, state } = value
  let currentState = state
  if (batteryCapacity < 25) {
    currentState = 'IDLE'
  }
  const user = await User.findOne({ _id: req.user._id }).select(
    'fullname email -_id',
  )
  cron.schedule('3 * * * *', async () => {
    await BatteryCapacityHistory.create({ batteryCapacity })
  })
  const serialNumber = Math.floor(100000 + Math.random() * 900000)
  await Evotal.create({
    serialNumber,
    model,
    batteryCapacity,
    weightLimit,
    currentState,
    user,
  })
  const data = {
    serialNumber,
    model,
    batteryCapacity,
    weightLimit,
    currentState,
  }
  return res.status(200).json({ message: 'Evotal created', data })
}
