const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "willen.fagher@gmail.com",
      pass: "Willi@m01",
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: "willen.fagher@gmail.com",
    subject: "Contact Form Submission",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: "Message sent" };
  } catch (error) {
    return { statusCode: 500, body: `Error: ${error.message}` };
  }
};