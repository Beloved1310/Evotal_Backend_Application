const mongoose = require('mongoose')

const BatteryCapacityHistory = new mongoose.Schema(
  {
    batteryCapacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model(
  'BatteryCapacityHistory',
  BatteryCapacityHistory,
)
