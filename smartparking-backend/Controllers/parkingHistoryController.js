const express = require("express");
const userReservation = require("../models/UserReservation");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const {email}=req.body
     const userReservationData= await userReservation.find({email:email})
    return res.status(200).json({ data:userReservationData});
  } catch (error) {
    console.error("Error during reservation:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
