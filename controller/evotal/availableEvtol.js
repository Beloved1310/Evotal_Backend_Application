const Evotal = require('../../model/evotal')

module.exports = async (req, res) => {
  const evotalAvailable = await Evotal.find({ weightLimit: { $lt: 500 } })
  if (!evotalAvailable)
    res.status(404).send({ message: 'No Evtol available for loading' })

  return res.status(200).send({ data: evotalAvailable })
}
