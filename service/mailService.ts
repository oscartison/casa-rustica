var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject:string, toEmail:string, otpText:string) {
    console.log(subject, toEmail, otpText)
  const transporter = nodemailer.createTransport({
    host: 'smtp-auth.mailprotect.be',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  transporter.verify((err, success) => {
    if (err) console.error(err);
    console.log('Your config is correct');
});


const mailOptions = {
    from: process.env.MAIL_ADDRESS,
    to: toEmail,
    subject: subject,
    text: otpText,
  };
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}