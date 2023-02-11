
const Joi = require('joi')

module.exports = function validate(input) {
  const schema = Joi.object({
    fullname: Joi.string().min(5).trim().required(),
    email: Joi.string().email().min(3).max(50).lowercase().required().trim(),
    password: Joi.string()
      .pattern(
        new RegExp(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      )
      .required()
      
  })
  return schema.validate(input)
}