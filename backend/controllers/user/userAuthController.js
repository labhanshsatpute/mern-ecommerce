const joi = require('joi');
const { User, validate } = require('../../models/user');
const UserAccessToken = require('../../models/userAccessToken');
const bcrypt = require('bcrypt');

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

const handleUser = async (req, res) => {
    return res.status(200).send({
        status: true,
        data: req.user,
    });
}

module.exports = { handleRegister, handleLogin, handleUser }