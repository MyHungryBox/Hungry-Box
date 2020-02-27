const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ramadesisaragih@gmail.com',
    pass: 'DesiCantik'
  }
});

module.exports = transporter