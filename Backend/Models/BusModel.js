const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busId: {
    type: Number,
    required: true
  },
  busNo: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
  },

  // Start location
  startLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },

  // End location
  endLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },

  // ✅ Pickup points (array of objects)
  pickupPoints: [
    {
      name: { type: String, required: true }, // Example: "Gate No. 1"
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
