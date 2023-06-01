const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['MALE','FEMALE','OTHER'],
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
},{ timestamps: true });

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1d" });
    return token;
}

const User = mongoose.model('User',userSchema);

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label('Name'),
        email: joi.string().required().label('Email'),
        phone: joi.number().required().label('Phone'),
        password: joi.string().required().label('Password')
    });
    return schema.validate(data);
} 

module.exports = { User, validate }