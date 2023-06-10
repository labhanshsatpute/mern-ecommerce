const joi = require('joi');
const { User, validate } = require('../../models/user');
const UserAccessToken = require('../../models/userAccessToken');
const bcrypt = require('bcrypt');
const UserPasswordResetOtp = require('../../models/userPasswordResetOtp');
const mail = require('../../config/mail');

const handleRegister = async (req, res) => {

    try {

        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }

        const userEmailExists = await User.findOne({ email: req.body.email });
        if (userEmailExists) {
            return res.status(400).send({
                status: false,
                message: "Email already in use"
            });
        }

        const userPhoneExists = await User.findOne({ phone: req.body.phone });
        if (userPhoneExists) {
            return res.status(400).send({
                status: false,
                message: "Phone already in use"
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = await new User({ ...req.body, password: hashPassword }).save();

        return res.status(400).send({
            status: false,
            message: "User successfully created",
            data: user,
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
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

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({
                status: false,
                message: "Email Address dose not exists"
            });
        }

        const verifyPassword = await bcrypt.compare(req.body.password, user.password);
        if (!verifyPassword) {
            return res.status(401).send({
                status: false,
                message: "Wrong Password"
            });
        }

        const token = user.generateAuthToken();

        await new UserAccessToken({ userId: user._id, token: token }).save();

        return res.status(200).send({
            status: true,
            message: "Successfully logged in",
            data: {
                token: token,
                user: user,
            }
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error",
        });
    }
}

const handleGetUser = async (req, res) => {
    return res.status(200).send({
        status: true,
        data: req.user,
    });
}

const handleSendPasswordResetOTP = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            email: joi.string().required().email().label('Email')
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

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({
                status: false,
                message: "Email Address dose not exists"
            });
        }

        const otp = Math.floor((Math.random() * 1000000) + 1);

        mail("MERN Ecommerce Backend", user.email, "Password Reset OTP", `Your password reset OTP is ${otp}`);

        await UserPasswordResetOtp.findOneAndDelete({ userId: user._id });

        await new UserPasswordResetOtp({ userId: user._id, otp: otp }).save();

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

        const otp = await UserPasswordResetOtp.findOne({ otp: req.body.otp });
        if (!otp) {
            return res.status(401).send({
                status: false,
                message: "Invalid OTP"
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.findOneAndUpdate({ _id: otp.userId }, {
            password: hashPassword
        });

        await UserPasswordResetOtp.findOneAndDelete({ userId: user._id });

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

const handleUpdateUser = async (req, res) => {

    try {

        const emailExist = await User.findOne({ email: req.body.email, _id: { $ne: req.user._id } });
        if (emailExist) {
            return res.status(400).send({
                status: false,
                message: "Email already in use"
            });
        }

        const phoneExist = await User.findOne({ phone: req.body.phone, _id: { $ne: req.user._id } });
        if (phoneExist) {
            return res.status(400).send({
                status: false,
                message: "Phone already in use"
            });
        }

        const user = await User.findByIdAndUpdate(req.user._id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender
        }, { new: true });

        return res.status(200).send({
            status: true,
            data: user
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
                status: false,
                message: error.details[0].message
            })
        }

        const verifyPassword = await bcrypt.compare(req.body.currentPassword, req.user.password);
        if (!verifyPassword) {
            return res.status(401).send({
                status: false,
                message: "Wrong Password"
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

        await User.findByIdAndUpdate(req.user.id, {
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

module.exports = {
    handleRegister,
    handleLogin,
    handleGetUser,
    handleSendPasswordResetOTP,
    handleResetPassword,
    handleUpdateUser,
    handleUpdatePassword
}