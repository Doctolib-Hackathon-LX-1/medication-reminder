const nodemailer = require('nodemailer');

// Create the email transport method with default values
const smtpTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'hackathon2medicationreminder@gmail.com',
    pass: 'medrem2020',
  },
});

const sendNodemailer = (data) => {
  const mailOptions = {
    from: `${data} <hackathon2medicationreminder@gmail.com>`,
    to: 'margbsousa@gmail.com',
    subject: `Med O'Clock - Time to take your ${data} medication`,
    text: `${data.mensagem}`,
    html: `Just a quick reminder, don't forget to take your ${data} medication!`,
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Notification sent!`);
    }
    smtpTransporter.close();
  });
};

module.exports = sendNodemailer;
