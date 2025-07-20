import React from "react";

const EventCard = ({ event, onBookClick }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition relative group overflow-hidden flex flex-col">
    <div className="h-84 overflow-hidden rounded-t-xl">
      <img
        src={event.poster}
        alt={event.title}
        className="w-full h-full object-cover object-top transition-transform group-hover:scale-105 duration-300"
      />
    </div>

    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          📅 {event.date} at {event.time}
        </p>
        <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
        <p className="text-sm text-gray-500 mb-3">{event.description}</p>
        <p className="text-red-600 font-bold text-lg">
          {event.ticketPrice > 0 ? `₹${event.ticketPrice.toFixed(2)}` : "Free"}
        </p>
      </div>

      <button
        onClick={() => onBookClick(event)}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
      >
        Book Now
      </button>
    </div>
  </div>
);
export default EventCard;