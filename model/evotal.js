const mongoose = require('mongoose')

// default: 'user'
const evotalSchema = mongoose.Schema(
  {
    serialNumber: {
      type: Number,
    },
    model: {
      type: String,
      enum: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
    },
    batteryCapacity: {
      type: Number,
    },
    weightLimit: {
      type: Number,
    },
    state: {
      type: String,
      enum: ['IDLE', 'LOADING', 'DELIVERING', 'DELIVERED', 'RETURNING'],
    },
    user: {
      _id: mongoose.Types.ObjectId,
      fullname: String,
      email: String,
    },
    medications: [
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'medication',
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('Evotal', evotalSchema)
