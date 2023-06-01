const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const UserAccessToken = require('../models/userAccessToken');

const authorizeUser = async (req, res, next) => {
    try {
        
        const authHeader = req.headers.authorization;

        if (authHeader) {
            
            const bearerToken = authHeader.split(' ')[1];

            const token = await UserAccessToken.findOne({ token: bearerToken });

            if (!token) {
                throw "Token expired";
            }

            const user = await User.findOne({ _id: token.userId });

            req.user = user;

            return next();

        }
        else {
            throw new "Invalid authorization token";
        }

    } catch (error) {
        return res.status(400).send({
            status: false,
            message: error
        });
    }
}

module.exports = { authorizeUser }