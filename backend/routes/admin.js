const router = require('express').Router();
const fileUpload = require('../config/fileUpload');
const adminAuthController = require('../controllers/admin/adminAuthController');
const adminCategoryController = require('../controllers/admin/adminCategoryController');
const { authorizeAdmin } = require('../middlewares/auth');

router.post('/auth/register', adminAuthController.handleRegister);
router.post('/auth/login', adminAuthController.handleLogin);
router.post('/auth/password/reset/otp', adminAuthController.handleSendPasswordResetOTP);
router.post('/auth/password/set', adminAuthController.handleResetPassword);

router.get('/auth', authorizeAdmin, adminAuthController.handleGetAdmin);
router.patch('/auth', authorizeAdmin, adminAuthController.handleUpdateAdmin);
router.patch('/auth/password', authorizeAdmin, adminAuthController.handleUpdatePassword);
router.post('/auth/profile', authorizeAdmin, fileUpload.single('profileImage'), adminAuthController.handleProfileUpload);

router.get('/category', authorizeAdmin, adminCategoryController.handleGetAllCategory);
router.get('/category/:id', authorizeAdmin, adminCategoryController.handleGetParticularCategory);

router.post('/category', authorizeAdmin, adminCategoryController.handleCreateCategory);
router.patch('/category/:id', authorizeAdmin, adminCategoryController.handleUpdateCategory);

router.delete('/category/:id', authorizeAdmin, adminCategoryController.handleDeleteCategory);

router.put('/category/:id/status', authorizeAdmin, adminCategoryController.handleUpdateCategoryStatus);
router.put('/category/:id/images/', authorizeAdmin, fileUpload.fields([
    {
        name: "thumbnail", maxCount: 1
    },
    {
        name: "coverImage", maxCount: 1,
    }
]), adminCategoryController.handleUpdateCategoryImages);

module.exports = router;
