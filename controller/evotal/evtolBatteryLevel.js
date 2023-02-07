
const Evotal = require('../../model/evotal')

module.exports = async (req, res) => {
  const { evotaId } = req.params
console.log(evotaId)
  const evtolBattery = await Evotal.findById(evotaId).select('batteryCapacity -_id')
  if (!evtolBattery) res.status(404).send({ message: 'Invalid id' })
  

  return res.status(200).send({data : evtolBattery})
}