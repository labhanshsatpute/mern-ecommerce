const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }   
});

const sendMail = async ({ to, subject, message } ) => {
    const result = await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: to,
        subject: subject,
        text: message
    });
}

module.exports = sendMail;
