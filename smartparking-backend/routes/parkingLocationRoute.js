const express = require('express');
const Location =  require('../models/ParkingLocations');
const router = express.Router();
const {connectToCollection,disconnectFromCollection} = require("../db");



router.get('/', async (req, res) => {
  try {
    const locations = await Location.find({});

    if (!locations || locations.length === 0) {
      console.log('No locations found');
      return res.status(404).send({ message: "No locations found" });
    }

    res.json(locations);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });

  } 
});


  module.exports = router;