const router = require('express').Router();
const fileUpload = require('../config/fileUpload');
const adminAuthController = require('../controllers/admin/adminAuthController');
const { authorizeAdmin } = require('../middlewares/auth');

router.post('/auth/register', adminAuthController.handleRegister);
router.post('/auth/login', adminAuthController.handleLogin);
router.post('/auth/password/reset/otp', adminAuthController.handleSendPasswordResetOTP);
router.post('/auth/password/set', adminAuthController.handleResetPassword);

router.get('/auth', authorizeAdmin, adminAuthController.handleGetAdmin);
router.patch('/auth', authorizeAdmin, adminAuthController.handleUpdateAdmin);
router.patch('/auth/password', authorizeAdmin, adminAuthController.handleUpdatePassword);
router.post('/auth/profile', authorizeAdmin, fileUpload.single('profileImage'), adminAuthController.handleProfileUpload);

module.exports = router;
