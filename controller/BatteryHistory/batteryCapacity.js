 const BatteryCapacityHistory = require('../../model/batterCapacity')

module.exports = async (req, res) => {

  const batterCapacity= await BatteryCapacityHistory.find()
  if (!batterCapacity) res.status(400).send({ message: 'Not Found' })


  return res.status(200).send(batterCapacity)
}
