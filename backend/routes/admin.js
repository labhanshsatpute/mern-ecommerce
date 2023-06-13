const router = require('express').Router();
const adminAuthController = require('../controllers/admin/adminAuthController');
const { authorizeAdmin } = require('../middlewares/auth');

router.post('/auth/register', adminAuthController.handleRegister);
router.post('/auth/login', adminAuthController.handleLogin);

router.get('/auth', authorizeAdmin, adminAuthController.handleGetAdmin);
router.post('/auth/password/reset/otp', adminAuthController.handleSendPasswordResetOTP);
// router.post('/auth/password/set', adminAuthController.handleSendPasswordResetOTP);

module.exports = router;
