const router = require('express').Router();
const adminAuthController = require('../controllers/admin/adminAuthController');
const { authorizeAdmin } = require('../middlewares/auth');

module.exports = router;
