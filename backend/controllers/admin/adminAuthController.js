const joi = require('joi');
const { Admin, validate } = require('../../models/admin');
const AdminAccessToken = require('../../models/adminAccessToken');
const bcrypt = require('bcrypt');
const AdminPasswordResetOtp = require('../../models/adminPasswordResetOtp');
const sendMail = require('../../config/sendMail');
const { existsSync, unlinkSync } = require('fs');

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
                message: "Email does not exists"
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

        await new AdminAccessToken({ adminId: admin._id, token: token }).save();

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

const handleSendPasswordResetOTP = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            email: joi.string().email().required().label('Email')
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
                message: "Email does not exist"
            });
        }

        const otp = Math.floor((Math.random() * 1000000) + 1);

        const passwordRestMail = {
            to: admin.email,
            subject: "Password Reset OTP",
            message: `Your password reset OTP is ${otp}`
        }

        sendMail(passwordRestMail);

        await AdminPasswordResetOtp.findOneAndDelete({ adminId: admin._id });

        await new AdminPasswordResetOtp({ adminId: admin._id, otp: otp }).save();

        return res.status(200).send({
            status: true,
            message: "Password reset OTP sent to your email",
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
        });
    }
}

const handleResetPassword = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            otp: joi.number().required().label('OTP'),
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

        const otp = await AdminPasswordResetOtp.findOne({ otp: req.body.otp });
        if (!otp) {
            return res.status(400).send({
                status: false,
                message: "Invalid OTP"
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const admin = await Admin.findByIdAndUpdate(otp.adminId, {
            password: hashPassword
        }, { new: true });

        await AdminPasswordResetOtp.findOneAndDelete({ adminId: admin._id });

        return res.status(200).send({
            status: true,
            message: "Password succesfully set",
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
        });
    }
}

const handleUpdateAdmin = async (req, res) => {

    try {

        const emailExist = await Admin.findOne({ email: req.body.email, _id: { $ne: req.admin._id } });
        if (emailExist) {
            return res.status(400).send({
                status: false,
                message: "Email already in use"
            });
        }

        const phoneExist = await Admin.findOne({ phone: req.body.phone, _id: { $ne: req.admin._id } });
        if (phoneExist) {
            return res.status(400).send({
                status: false,
                message: "Phone already in use"
            });
        }

        const admin = await Admin.findByIdAndUpdate(req.admin._id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender
        }, { new: true });

        return res.status(200).send({
            status: true,
            data: admin
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
        });
    }
}

const handleUpdatePassword = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            currentPassword: joi.string().required().label('Current Password'),
            newPassword: joi.string().required().label('New Password')
        });
        return schema.validate(data);
    }

    try {

        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: true,
                message: error.details[0].message
            });
        }

        const verifyPassword = await bcrypt.compare(req.body.currentPassword, req.admin.password);
        if (!verifyPassword) {
            return res.status(400).send({
                status: false,
                message: "Wrong Password"
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

        await Admin.findByIdAndUpdate(req.admin._id, {
            password: hashPassword
        }, { new: true });

        return res.status(200).send({
            status: true,
            message: "Password successfully updated"
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
        });
    }
}

const handleProfileUpload = async (req, res) => {

    try {

        const admin = await Admin.findOne({ _id: req.admin._id });

        if (admin.profileImage) {
            if (existsSync(admin.profileImage)) unlinkSync(admin.profileImage);
        }

        const updatedAdmin = await Admin.findByIdAndUpdate(req.admin._id, {
            profileImage: req.file.path
        }, { new: true });

        return res.status(200).send({
            status: true,
            message: "File successfully uploaded",
            data: updatedAdmin
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
        });
    }
}

module.exports = {
    handleRegister,
    handleLogin,
    handleGetAdmin,
    handleSendPasswordResetOTP,
    handleResetPassword,
    handleUpdateAdmin,
    handleUpdatePassword,
    handleProfileUpload
}