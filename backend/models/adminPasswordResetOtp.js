const mongoose = require('mongoose');

const adminPasswordResetOtpSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    otp: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        expires: 600
    }
});

const adminPasswordResetOtp = mongoose.model('AdminPasswordResetOtp', adminPasswordResetOtpSchema);

module.exports = adminPasswordResetOtp;