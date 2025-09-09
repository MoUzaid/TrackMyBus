const express = require("express");
const router = express.Router();
const busCtrl = require("../controllers/busCtrl");

// CRUD routes
router.post("/", busCtrl.createBus);       // Create bus
router.get("/", busCtrl.getAllBuses);      // Get all buses
router.get("/:id", busCtrl.getBusById);    // Get single bus
router.put("/:id", busCtrl.updateBus);     // Update bus
router.delete("/:id", busCtrl.deleteBus);  // Delete bus

module.exports = router;
