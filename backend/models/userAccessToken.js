const mongoose = require('mongoose');

const userAccessTokenSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 30 * 86400
    }
});

const userAccessToken = mongoose.model('UserAccessToken', userAccessTokenSchema);

module.exports = userAccessToken;