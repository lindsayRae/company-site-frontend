const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Subject: ${body.subject}\r\n
    message: ${body.message}\r\n
  `;

  const data = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: 'lbarnett712@gmail.com',
    subject: 'Contact form from rizzy.io',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  mail.send(data);
  res.status(200).json({ status: 'OK' });
};
