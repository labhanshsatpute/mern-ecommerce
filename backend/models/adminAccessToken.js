const mongoose = require('mongoose');

const adminAccessTokenSchema = mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    token: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        expires: 30 * 86400
    }
});

const adminAccessToken = mongoose.model('AdminAccessToken', adminAccessTokenSchema);

module.exports = adminAccessToken;