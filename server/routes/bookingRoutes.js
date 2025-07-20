const express = require("express");
const { createBooking, getAllBookings } = require("../controllers/bookingController");
const validate = require("../middleware/validate");
const bookingSchema = require("../validations/bookingValidation");

const router = express.Router();

router.post("/", validate(bookingSchema), createBooking);
router.get("/", getAllBookings);

module.exports = router;
