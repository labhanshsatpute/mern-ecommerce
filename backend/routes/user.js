const router = require('express').Router();
const userAuthController = require('../controllers/user/userAuthController');
const { authorizeUser } = require('../middlewares/auth');
const fileUpload = require('../config/fileUpload');

router.post('/auth/register', userAuthController.handleRegister);
router.post('/auth/login', userAuthController.handleLogin);
router.post('/auth/password/reset/otp', userAuthController.handleSendPasswordResetOTP);
router.post('/auth/password/set', userAuthController.handleResetPassword);

router.get('/auth', authorizeUser, userAuthController.handleGetUser);
router.patch('/auth', authorizeUser, userAuthController.handleUpdateUser);
router.patch('/auth/password', authorizeUser, userAuthController.handleUpdatePassword);
router.post('/auth/profile', authorizeUser, fileUpload.single('profileImage'), userAuthController.handleProfileUpload);

module.exports = router;