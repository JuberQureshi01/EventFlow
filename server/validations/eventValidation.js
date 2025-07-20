const Joi = require("joi");

const eventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  poster: Joi.string().uri().required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  location: Joi.string().required(),
  ticketPrice: Joi.number().min(0).required(),
  totalSeats: Joi.number().min(1).required(),
  availableSeats: Joi.number().min(0).required(),
  category: Joi.string().required(),
  isActive: Joi.boolean().optional()
});

module.exports = eventSchema;
