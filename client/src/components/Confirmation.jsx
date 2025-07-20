import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import { toast } from "react-hot-toast";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/bookings/${bookingId}`
        );
        setBooking(data);
        toast.success("Payment successful! Booking confirmed 🎉", {
          position: "top-center",
        });
      } catch (err) {
        console.error("Error fetching booking", err);
        toast.error("Failed to load booking.");
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) {
      fetchBooking();
    } else {
      setLoading(false);
    }
  }, [bookingId]);

  const handleQRDownload = () => {
    const qrCanvas = document.querySelector("canvas");
    const imgData = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `ticket-${booking._id}.png`;
    link.click();
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  if (!booking) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Booking not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-6 text-center">
        <div className="text-4xl mb-2">🎉</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Booking Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Your booking has been successfully confirmed! 🎉
        </p>

        {/* Booking Details */}
        <div className="bg-gray-50 p-4 rounded-lg text-left mb-6 space-y-1">
          <p>
            <strong>Event:</strong> {booking.event.title}
          </p>
          <p>
            <strong>Date:</strong> {booking.event.date} at {booking.event.time}
          </p>
          <p>
            <strong>Location:</strong> {booking.event.location}
          </p>
          <p>
            <strong>Attendee:</strong> {booking.name}
          </p>
          <p>
            <strong>Email:</strong> {booking.email}
          </p>
          <p>
            <strong>Tickets:</strong> {booking.quantity}
          </p>
          {booking.paymentId && (
            <p>
              <strong>Payment ID:</strong> {booking.paymentId}
            </p>
          )}
          <hr className="my-2" />
          <p className="text-red-600 font-bold">
            Total Price: ₹{booking.amountPaid}
          </p>
        </div>

        {/* QR Code */}
        <div className="mb-6">
          <p className="font-medium mb-2 text-gray-700">
            Scan this QR at the event:
          </p>
          <div className="inline-block p-2 border rounded shadow bg-white">
            <QRCodeCanvas
              value={JSON.stringify({
                bookingId: booking._id,
                event: booking.event.title,
                name: booking.name,
                email: booking.email,
                quantity: booking.quantity,
              })}
              size={128}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>
          <button
            onClick={handleQRDownload}
            className="mt-3 text-sm text-blue-600 hover:underline"
          >
            Download QR Code
          </button>
        </div>

        {/* Continue Button */}
        <button
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          onClick={() => (window.location.href = "/")}
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
