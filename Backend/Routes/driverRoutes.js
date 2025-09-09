    const express = require('express');
const router = express.Router();
const driverCtrl = require('../Controllers/driverCtrl');
const authDriver = require('../middlewares/authDriver');

// Routes
router.post('/register', driverCtrl.registerDriver);
router.post('/login', driverCtrl.loginDriver);
router.get('/logout', driverCtrl.logoutDriver);
router.get('/refresh_token', driverCtrl.refreshToken);
router.get('/info',authDriver, driverCtrl.getDriver);
router.put('/update',authDriver, driverCtrl.updateBusId);
router.post("/forgot-password", driverCtrl.forgotPassword);
router.post("/reset-password", driverCtrl.resetPassword);

module.exports = router;
