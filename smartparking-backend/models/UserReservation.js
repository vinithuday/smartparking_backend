const { string } = require("joi");
const mongoose = require("mongoose");

const userReservationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  location: {
    type: String,
    required: true,
  },
  selectedSlot: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },

  departureTime: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  chosenDate: {
    type: Date,
    required: true,
  },
});

const Reservation = mongoose.model("userReservation", userReservationSchema);

module.exports = Reservation;
