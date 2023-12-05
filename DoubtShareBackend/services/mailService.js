// mailService.js
const nodemailer = require('nodemailer');

const MailService = {};

// Create a nodemailer transporter with your email service configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Replace with your email
    pass: 'your_email_password', // Replace with your email password or an app-specific password
  },
});

MailService.sendEmail = (to, subject, message) => {
  // Send email logic here
  const mailOptions = {
    from: 'your_email@gmail.com', // Replace with your email
    to,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = MailService;
