const Joi = require('joi')

module.exports = function validate(input) {
  const schema = Joi.object({
    model: Joi.string().required(),
    weightLimit: Joi.number().required(),
    batteryCapacity: Joi.number().required(),
    state: Joi.string().required(),
  })
  return schema.validate(input)
}
