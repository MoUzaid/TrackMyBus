const express = require("express");
const router = express.Router();
const busCtrl = require("../Controllers/busCtrl");

router.post("/create", busCtrl.createBus);       // Create bus
router.get("/buses", busCtrl.getAllBuses);      // Get all buses
router.get("/:busId", busCtrl.getBusById);    // Get single bus
router.put("/:busId", busCtrl.updateBus);     // Update bus
router.delete("/:busId", busCtrl.deleteBus);  // Delete bus

module.exports = router;
