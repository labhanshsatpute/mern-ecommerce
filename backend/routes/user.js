const router = require('express').Router();
const userAuthController = require('../controllers/user/userAuthController');

router.get('/',(req,res) => {
    return res.status(200).send({
        status: true,
        message: "Hello from server"
    });
})

router.post('/register', userAuthController.handleRegister);
router.post('/login', userAuthController.handleLogin);

module.exports = router;