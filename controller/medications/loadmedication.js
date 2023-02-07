const Evotal = require('../../model/evotal')
const cloudinary = require('../../utilis/cloudinary')
const loadMedicationValidate = require('../../validation/loadMedicationValidate')
const Medication = require('../../model/medication')

module.exports = async (req, res) => {
  const { value, error } = loadMedicationValidate(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })
  const { name, weight, code } = value
  const {
    secure_url: image,
    public_id: cloudinary_id,
  } = await cloudinary.uploader.upload(req.file.path)
  const { weightLimit } = await Evotal.findOne({ _id: req.params.id }).select(
    'weightLimit -_id',
  )
  if (weightLimit === 500 || weight > 500) {
    return res
      .status(200)
      .send({ message: 'Medication loaded at maximum limit' })
  }

  let addedweight = weight + weightLimit
  const medication = new Medication({
    image,
    cloudinary_id,
    name,
    weight,
    code,
    evotal: req.params.id,
    postedBy: req.user.fullname,
  })

  let savedMedication = await medication.save()
  const data = {
    image,
    cloudinary_id,
    name,
    weight,
    code,
    postedBy: savedMedication.postedBy,
  }

  await Evotal.findOneAndUpdate(
    { _id: req.params.id },
    { weightLimit: addedweight },
    { $push: { medications: savedMedication } },
  )

  return res.status(200).json({ message: 'Medication added', data })
}
