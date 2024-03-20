const express = require("express");
const userReservation = require("../models/UserReservation");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const {location,arrivalDateTime,departureTime}=req.body
    const reservedSlots= await userReservation.find({location:location,})
        let blockedSlots=[];
        for(let i=0; i<reservedSlots.length;i++){
          if (arrivalDateTime >= reservedSlots[i].arrivalDateTime && departureTime<=reservedSlots[i].departureTime ||
            reservedSlots[i].departureTime>=arrivalDateTime||
            reservedSlots[i].arrivalDateTime>=departureTime){
            blockedSlots.push(reservedSlots[i].selectedSlot)
          } 
        }
    return res.status(201).json({ data:blockedSlots});
  } catch (error) {
    console.error("Error during reservation:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
