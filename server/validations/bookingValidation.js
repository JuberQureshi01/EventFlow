const Joi = require("joi");

const bookingSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  eventId: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
  amountPaid: Joi.number().min(0).required(),
  paymentStatus: Joi.string().valid("pending", "paid").optional(),

  eventSnapshot: Joi.object({
    title: Joi.string().required(),
    date: Joi.string().required(), 
    time: Joi.string().required(),
    location: Joi.string().required(),
  }).optional(),
});

module.exports = bookingSchema;
