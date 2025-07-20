const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
