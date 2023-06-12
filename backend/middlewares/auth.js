const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const UserAccessToken = require('../models/userAccessToken');
const AdminAccessToken = require('../models/adminAccessToken');
const { Admin } = require('../models/admin');

const authorizeUser = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw "Please provide authorization token";
        }

        if (typeof authHeader != undefined) {

            const bearerToken = authHeader.split(' ')[1];

            const token = await UserAccessToken.findOne({ token: bearerToken });

            if (!token) {
                throw "Invalid authorization token";
            }

            const user = await User.findOne({ _id: token.userId });

            req.user = user;

            return next();

        }
        else {
            throw "Invalid authorization token";
        }

    } catch (error) {
        return res.status(400).send({
            status: false,
            message: error
        });
    }
}

const authorizeAdmin = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw "Please provide authorization token";
        }

        if (typeof authHeader != undefined) {

            const bearerToken = authHeader.split(' ')[1];

            const token = await AdminAccessToken.findOne({ token: bearerToken });

            if (!token) {
                throw "Invalid authorization token";
            }

            const admin = await Admin.findOne({ _id: token.adminId });

            req.admin = admin;

            return next();

        }
        else {
            throw "Invalid authorization token";
        }

    } catch (error) {
        return res.status(400).send({
            status: false,
            message: error
        })
    }
}

module.exports = { authorizeUser, authorizeAdmin }