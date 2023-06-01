const router = require('express').Router();
const userAuthController = require('../controllers/user/userAuthController');
const { authorizeUser } = require('../middlewares/auth');

router.post('/', userAuthController.handleRegister);
router.post('/login', userAuthController.handleLogin);

router.get('/', authorizeUser, userAuthController.handleUser);

module.exports = router;