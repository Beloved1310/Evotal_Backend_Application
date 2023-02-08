const Evotal = require('../../model/evotal')
const User = require('../../model/user')

const registerEvotal = require('../../Validation/registerEvotal')

module.exports = async (req, res) => {
  const { value, error } = registerEvotal(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })
  const { model, batteryCapacity, weightLimit, state } = value
  let currentState = state
  // if(batteryCapacity === 25){

  // }
  const user = await User.findOne({ _id: req.user._id }).select(
    'fullname email -_id',
  )
  const serialNumber = Math.floor(100000 + Math.random() * 900000)
  console.log(value, 'vaaa')
  await Evotal.create({
    serialNumber,
    model,
    batteryCapacity,
    weightLimit,
    state,
    user,
  })
  const data = {
    serialNumber,
    model,
    batteryCapacity,
    weightLimit,
    state,
  }
  return res.status(200).json({ message: 'Evotal created', data })
}
