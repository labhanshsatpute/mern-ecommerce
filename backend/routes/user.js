const router = require('express').Router();
const userAuthController = require('../controllers/user/userAuthController');
const { authorizeUser } = require('../middlewares/auth');
const fileUpload = require('../config/fileUpload');

router.post('/', userAuthController.handleRegister);
router.post('/login', userAuthController.handleLogin);

router.post('/password/reset/otp', userAuthController.handleSendPasswordResetOTP);
router.post('/password/set', userAuthController.handleResetPassword);

router.get('/', authorizeUser, userAuthController.handleGetUser);
router.patch('/', authorizeUser, userAuthController.handleUpdateUser);
router.patch('/password', authorizeUser, userAuthController.handleUpdatePassword);

router.post('/profile', authorizeUser, fileUpload.single('profileImage'), userAuthController.handleProfileUpload);

module.exports = router;