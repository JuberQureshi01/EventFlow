const express = require("express");
const { createEvent, getAllEvents } = require("../controllers/eventController");
const validate = require("../middleware/validate");
const eventSchema = require("../validations/eventValidation");
const router = express.Router();

router.post("/", validate(eventSchema), createEvent);
router.get("/", getAllEvents);

module.exports = router;
