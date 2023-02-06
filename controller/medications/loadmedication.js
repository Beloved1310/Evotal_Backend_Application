const Evotal = require('../../model/evotal')
const cloudinary = require('../../utilis/cloudinary')
const loadMedicationValidate = require('../../validation/loadMedicationValidate')
const Medication = require('../../model/medication')

module.exports = async (req, res) => {
  const { value, error } = loadMedicationValidate(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })
  const { name, weight, code } = value
  const { secure_url: image, public_id: cloudinary_id } =
  await cloudinary.uploader.upload(req.file.path)
  // const currentEvotalWeight = Evotal.findOne({id : req.params.id}).select('weight')
  
  const medication = new Medication({
    image,
    cloudinary_id,
    name,
    weight,
    code,
    evotal: req.params.id,
    postedBy: req.user.fullname,
  })

  const savedMedication = await medication.save()
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
    { $push: { medications: savedMedication } },
  )

  return res.status(200).json({ message: 'Medication added', data })
}
