const express = require('express');
const router = express.Router();
const userCtrl = require('../Controllers/userCtrl');
const auth = require('../middlewares/authUser');

router.get('/info',auth, userCtrl.getUser);
router.post('/register', userCtrl.registerUser);
router.post('/login', userCtrl.login);
router.post('/logout', userCtrl.logout);
router.post("/forgot-password", userCtrl.forgotPassword);
router.post("/reset-password", userCtrl.resetPassword);
router.get('/refresh_token', userCtrl.refreshToken);

module.exports = router;   
