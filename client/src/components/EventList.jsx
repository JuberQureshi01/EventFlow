import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "./BookingForm";
import EventCard from "../template/EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);
      } catch (error) {
        console.error("API failed"+error);
      }
    };
    fetchEvent();
  }, []);

  const handleBookClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const handleStartBooking = () => {
    setSelectedEvent(null); 
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleBookingSubmit = (data) => {
    console.log("Booking Submitted:", data);
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-600">No events available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onBookClick={handleBookClick}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition"
            onClick={handleStartBooking}
          >
            Start Booking
          </button>
        </div>
      </div>

      {showPopup && (
        <BookingForm
          event={selectedEvent}
          allEvents={events}
          onClose={handleClosePopup}
          onSubmit={handleBookingSubmit}
        />
      )}
    </section>
  );
};

export default EventList;
