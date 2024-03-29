const mongoose = require('mongoose')

const medicationSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    name: {
      type: String,
    },
    weight: {
      type: String,
    },
    code: {
      type: String,
    },
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    evotal: { type: mongoose.Schema.Types.ObjectId, ref: 'evotal' },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Medication', medicationSchema)
