const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    serialNumber: {
      type: Number,
    },
    model: {
      type: Number,
      enum: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
    },
    batteryCapacity: {
      type: Number,
    },
    weightLimit: {
      type: Number,
    },
    state: {
      type: Number,
      enum: ['IDLE', 'LOADING', 'DELIVERING', 'DELIVERED', 'RETURNING'],
    },
    date: {
      type: Date,
      default: Date.now,
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

module.exports = mongoose.model('Blog', blogSchema)
