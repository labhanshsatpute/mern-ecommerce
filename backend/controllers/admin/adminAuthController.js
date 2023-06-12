const joi = require('joi');
const { Admin, validate } = require('../../models/admin');
const AdminAccessToken = require('../../models/adminAccessToken');
const bcrypt = require('bcrypt');
const AdminPasswordResetOtp = require('../../models/adminPasswordResetOtp');
const mail = require('../../config/mail');
const adminAccessToken = require('../../models/adminAccessToken');

const handleRegister = async (req, res) => {
    
    try {
        
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }

        const adminEmailExists = await Admin.findOne({ email: req.body.email });
        if (adminEmailExists) {
            return res.status(400).send({
                status: false,
                message: "Email already in use"
            });
        }

        const adminPhoneExists = await Admin.findOne({ phone: req.body.phone });
        if (adminPhoneExists) {
            return res.status(400).send({
                status: false,
                message: "Phone already in use"
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const admin = await new Admin({ ...req.body, password: hashPassword }).save();

        return res.status(201).send({
            status: true,
            message: "Admin successfully created",
            data: admin
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

const handleLogin = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            email: joi.string().required().email().label('Email'),
            password: joi.string().required().label('Password')
        });
        return schema.validate(data);
    } 

    try {

        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }

        const admin = await Admin.findOne({ email: req.body.email });
        if (!admin) {
            return res.status(400).send({
                status: false,
                message: "Email dose not exists"
            });
        }
        
        const verifyPassword = await bcrypt.compare(req.body.password, admin.password);
        if (!verifyPassword) {
            return res.status(400).send({
                status: false,
                message: "Wrong Password"
            });
        }

        const token = admin.generateAuthToken();

        await new adminAccessToken({ adminId: admin._id, token: token }).save();

        return res.status(200).send({
            status: true,
            message: "Successfully logged in",
            data: {
                token: token,
                admin: admin,
            }
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

const handleGetAdmin = (req, res) => {
    return res.status(200).send({
        status: true,
        data: req.admin
    });
}

module.exports = {
    handleRegister,
    handleLogin,
    handleGetAdmin
}