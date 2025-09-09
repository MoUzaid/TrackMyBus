const Bus = require("../Models/BusModel");

const busCtrl = {
  // Create new bus
  createBus: async (req, res) => {
    try {
      const { busId, busNo, capacity } = req.body;

      const existingBus = await Bus.findOne({ busNo });
      if (existingBus) {
        return res.status(400).json({ msg: "Bus number already exists" });
      }

      const newBus = new Bus({ busId, busNo, capacity });
      await newBus.save();

      return res.status(201).json({ msg: "Bus created successfully", bus: newBus });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Get all buses
  getAllBuses: async (req, res) => {
    try {
      const buses = await Bus.find();
      return res.json(buses);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Get bus by ID (MongoDB _id)
  getBusById: async (req, res) => {
    try {
      const bus = await Bus.findById(req.params.id);
      if (!bus) return res.status(404).json({ msg: "Bus not found" });
      return res.json(bus);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Update bus details
  updateBus: async (req, res) => {
    try {
      const { busId, busNo, capacity } = req.body;
      const bus = await Bus.findByIdAndUpdate(
        req.params.id,
        { busId, busNo, capacity },
        { new: true }
      );
      if (!bus) return res.status(404).json({ msg: "Bus not found" });
      return res.json({ msg: "Bus updated successfully", bus });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Delete bus
  deleteBus: async (req, res) => {
    try {
      const bus = await Bus.findByIdAndDelete(req.params.id);
      if (!bus) return res.status(404).json({ msg: "Bus not found" });
      return res.json({ msg: "Bus deleted successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = busCtrl;
