const mongoose = require("mongoose");

const parkingLocationsSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  name: { type: String },
});

const ParkingLocations = mongoose.model(
  "ParkingLocation",
  parkingLocationsSchema
);

module.exports = ParkingLocations;
