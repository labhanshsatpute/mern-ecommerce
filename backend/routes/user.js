const router = require('express').Router();
const userAuthController = require('../controllers/user/userAuthController');
const { authorizeUser } = require('../middlewares/auth');

router.post('/', userAuthController.handleRegister);
router.post('/login', userAuthController.handleLogin);

router.post('/password/reset/otp', userAuthController.handleSendPasswordResetOTP);
router.post('/password/set', userAuthController.handleResetPassword);

router.get('/', authorizeUser, userAuthController.handleUser);

module.exports = router;