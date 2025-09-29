const Bus = require("../Models/BusModel");

const busCtrl = {
  // Create new bus
  createBus: async (req, res) => {
    try {
      const { busId, busNo, capacity, startLocation, endLocation, pickupPoints } = req.body;

      // Check if bus already exists by busNo
      const existingBus = await Bus.findOne({ busNo });
      if (existingBus) {
        return res.status(400).json({ msg: "Bus number already exists" });
      }

      // Create new bus with pickup points
      const newBus = new Bus({
        busId,
        busNo,
        capacity,
        startLocation, // expects { lat, lng }
        endLocation,   // expects { lat, lng }
        pickupPoints   // expects [{ name, lat, lng }, ...]
      });

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

  // Get bus by busId (not _id)
  getBusById: async (req, res) => {
    try {
      const { busId } = req.params;

      // 🔹 Note: req.params are always strings → convert if needed
      const bus = await Bus.findOne({ busId:busId });

      if (!bus) return res.status(404).json({ msg: "Bus not found" });
      return res.json(bus);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Update bus details
  updateBus: async (req, res) => {
    try {
      const { busId, busNo, capacity, startLocation, endLocation, pickupPoints } = req.body;

      const bus = await Bus.findByIdAndUpdate(
        req.params.id, // 🔹 Here, you are updating by MongoDB _id, not busId
        { busId, busNo, capacity, startLocation, endLocation, pickupPoints },
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
      const bus = await Bus.findByIdAndDelete(req.params.id); // 🔹 Deleting by MongoDB _id
      if (!bus) return res.status(404).json({ msg: "Bus not found" });
      return res.json({ msg: "Bus deleted successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = busCtrl;
