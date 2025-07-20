const Booking = require("../models/Booking");
const Event = require("../models/Event");
const bookingSchema = require("../validations/bookingValidation");

const createBooking = async (req, res) => {
  try {
    // Validate request
    const { error, value } = bookingSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { eventId, name, email, quantity, amountPaid, paymentStatus } = value;

    // Check if event exists & is active
    const event = await Event.findById(eventId);
    if (!event || !event.isActive) {
      return res.status(404).json({ message: "Event not found or inactive" });
    }

    // Check seat availability
    if (quantity > event.availableSeats) {
      return res.status(400).json({ message: "Not enough available seats" });
    }

    // Reduce available seats (optional here, or after payment)
    event.availableSeats -= quantity;
    await event.save();

    // Create snapshot
    const eventSnapshot = {
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
    };

    // Save booking with safe fields
    const booking = new Booking({
      name,
      email,
      eventId,
      quantity,
      amountPaid,
      paymentStatus: paymentStatus || "pending",
      eventSnapshot, 
    });

    await booking.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("eventId");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Fetching bookings failed", error: err.message });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
};
