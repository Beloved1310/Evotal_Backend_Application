const Joi = require('joi')

module.exports = function validate(input) {
  const schema = Joi.object({
    name: Joi.string()
      .pattern(
        new RegExp(
          '^[a-zA-Z0-9_.-]*$',
        ),
      )
      .required(),
    weight: Joi.number().required(),
    code: Joi.string()
      .pattern(
        new RegExp(
            '^[a-zA-Z0-9_.-]*$',
        ),
      )
      .required(),
  })
  return schema.validate(input)
}
