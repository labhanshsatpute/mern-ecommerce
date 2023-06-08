const joi = require('joi');
const { Admin, validate } = require('../../models/admin');
const AdminAccessToken = require('../../models/adminAccessToken');
const bcrypt = require('bcrypt');
const AdminPasswordResetOtp = require('../../models/adminPasswordResetOtp');
const mail = require('../../config/mail');