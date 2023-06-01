const mongoose = require('mongoose');

const userPasswordResetOtpSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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

const userPasswordResetOtp = mongoose.model("UserPasswordResetOtp", userPasswordResetOtpSchema);

module.exports = userPasswordResetOtp;