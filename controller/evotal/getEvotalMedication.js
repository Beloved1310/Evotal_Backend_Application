const Evotal = require('../../model/evotal')

module.exports = async (req, res) => {
  const { evotalId } = req.params

  const evotalMedications = await Evotal.findById(evotalId).populate(
    'medications',
  )
  if (!evotalMedications) res.status(404).send({ message: 'Invalid id' })

  const { medications: data } = evotalMedications
  
  return res.status(200).send(data)
}
