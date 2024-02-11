const express = require('express');
const userReservation =  require('../models/UserReservation');
const router = express.Router();

let reservation_id= 100000;

router.post('/reservation', async (req, res) => {
    const { email, location, arrivalTime, departureTime, totalPrice, parkingSlot} = req.body;

  try {
    const newUserReservation = new userReservation({
    reservation_id : reservation_id +1,
      email,
      location, arrivalTime, departureTime, totalPrice, parkingSlot
    });

    await newUserReservation.save();

    return res.status(201).json({ message: 'Reservation successful' });
  } catch (error) {
    console.error('Error during reservation:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

  module.exports = router;