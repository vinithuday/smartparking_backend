

const mongoose = require('mongoose');

const userReservationSchema = new mongoose.Schema({
    reservation_id: {
        type: Number,
        required: true,
      },
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
  parkingSlot:{
    type: String,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
 
  totalPrice: {
    type: Number,
    required: true,
  },
 
});

const Reservation = mongoose.model('userReservation', userReservationSchema);

module.exports = Reservation;
