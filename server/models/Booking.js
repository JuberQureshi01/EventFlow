const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        eventId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",

            required: true
            ,
        },
        eventSnapshot: {

            type: Object,

            required: true
            ,
        },
        quantity: {
            type: Number,
            required: true
        },
        amountPaid: {
            type: Number,
            required: true
        },
        paymentStatus: {
            type: String, default: "pending"
        },
        paymentId: {
            type: String
        }, // Razorpay payment ID
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
