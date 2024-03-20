const express = require("express");
const userReservation = require("../models/UserReservation");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const {
      email,
      location,
      selectedSlot,
      arrivalDateTime,
      departureTime,
      totalPrice,
      qrCodeValue,
    } = req.body;

    if (
      !email ||
      !arrivalDateTime ||
      !departureTime ||
      !totalPrice ||
      !selectedSlot ||
      !location ||
      !qrCodeValue
    ) {
      return res.status(400).json({
        message: "Invalid request. Please provide all required data.",
      });
    }

    const newUserReservation = new userReservation({
      email,
      location,
      selectedSlot,
      arrivalDateTime,
      departureTime,
      totalPrice,
      qrCodeValue,
    });

    await newUserReservation.save();

    return res.status(201).json({ message: "Reservation successful" });
  } catch (error) {
    console.error("Error during reservation:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
