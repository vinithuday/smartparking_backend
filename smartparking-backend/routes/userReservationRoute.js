const express = require("express");
const userReservation = require("../models/UserReservation");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      email,
      location,
      selectedSlot,
      chosenDate,
      arrivalTime,
      departureTime,
      totalPrice,
    } = req.body;

    
    if (
      !email ||
      !chosenDate ||
      !arrivalTime ||
      !departureTime ||
      !totalPrice ||
      !selectedSlot ||
      !location
    ) {
      return res
        .status(400)
        .json({
          message: "Invalid request. Please provide all required data.",
        });
    }

    const newUserReservation = new userReservation({
      email,
      location,
      selectedSlot,
      chosenDate,
      arrivalTime,
      departureTime,
      totalPrice,
    });

    await newUserReservation.save();

    return res.status(201).json({ message: "Reservation successful" });
  } catch (error) {
    console.error("Error during reservation:", error);
    return res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
