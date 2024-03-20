const { string } = require('joi');
const mongoose = require('mongoose');

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
    unique: false,

  },
  arrivalDateTime: {
    type: String,
    required: true,
    unique: false,

  },
  qrCodeValue:{
    type: String,
    required: true,
    unique: false,
  },
  
  departureTime: {
    type: String,
    required: true,
    unique: false,

  },
  totalPrice: {
    type: Number,
    required: true,
    
  }
 
});


const Reservation = mongoose.model('userReservation', userReservationSchema);

module.exports = Reservation;
