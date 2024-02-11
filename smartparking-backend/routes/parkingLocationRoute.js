const express = require('express');
const Location =  require('../models/ParkingLocations');
const router = express.Router();

router.get('/locations', async (req, res) => {
    try {
      const locations = await Location.find();
      res.json(locations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;