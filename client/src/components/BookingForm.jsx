import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = ({ event, allEvents, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
    selectedEventId: event?._id || "",
  });

  const selectedEvent = allEvents.find(
    (e) => e._id === formData.selectedEventId
  );

  useEffect(() => {
    if (event?._id) {
      setFormData((prev) => ({ ...prev, selectedEventId: event._id }));
    }
  }, [event]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tickets" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selected = allEvents.find(
      (ev) => ev._id === formData.selectedEventId
    );
    const amount = selected.ticketPrice * formData.tickets;

    try {
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: selected.title,
        description: selected.description,
        image: selected.poster || "",
        order_id: order.id,
        handler: async function () {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/bookings",
              {
                ...formData,
                eventId: selected._id,
                quantity: formData.tickets,
                amountPaid: (order.amount / 100),
                paymentStatus: "paid",
              }
            );
            window.location.href = `/confirmation?bookingId=${response.data._id}`;
          } catch (error) {
            console.error("Booking save failed", error);
            alert("Booking failed even after payment");
          }
        },
        theme: { color: "#e11d48" },
        method: {
          card: true,
          upi: true,
          wallet: true,
          netbanking: true,
          emi: false,
          paylater: false,
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: "",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  console.log(allEvents[0].ticketPrice);

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 pl-4 text-4xl text-gray-500 hover:text-red-600"
        >
          &times;
        </button>

        {event && selectedEvent && (
          <div className="border border-red-300 rounded-lg p-5 mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-2">
              Selected Event: {selectedEvent.title}
            </h3>
            <p className="text-gray-800 mb-1">
              <span className="font-semibold">Date:</span> {selectedEvent.date}{" "}
              at {selectedEvent.time}
            </p>
            <p className="text-gray-800 mb-1">
              <span className="font-semibold">Location:</span>{" "}
              {selectedEvent.location}
            </p>
            <p className="text-red-600 font-semibold mb-1">
              Price per ticket: ₹{selectedEvent.ticketPrice.toFixed(2)}
            </p>
            <p className="text-gray-700">
              Available Tickets: {selectedEvent.availableSeats}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!event && (
            <div>
              <label className="block font-semibold text-sm mb-1">
                Select Event:
              </label>
              <select
                name="selectedEventId"
                value={formData.selectedEventId}
                onChange={handleChange}
                className="w-full border-2 border-red-300 rounded px-3 py-2"
                required
              >
                <option value="">-- Choose Event --</option>
                {allEvents.map((ev) => (
                  <option key={ev._id} value={ev._id}>
                    {`${ev.title} - ${ev.date} - ₹${ev.ticketPrice}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-sm mb-1">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1">
              Number of Tickets:
            </label>
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              max={selectedEvent?.availableSeats || 10}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg w-full py-3 rounded transition"
          >
            Pay ₹
            {selectedEvent?selectedEvent.ticketPrice * formData.tickets:"0.00"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
