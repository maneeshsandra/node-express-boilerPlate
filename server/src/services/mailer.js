const nodeMailer = require("nodemailer");

module.exports = {
  sendEmail: async (object) => {
    try {
      const { recipients, subject, message } = object;
      if (!recipients) {
        throw Error(
          "Please provide a reciever email address 'recipients' field"
        );
      }
      if (!message) {
        throw Error("Please provide a email message in 'message' field");
      }
      if (!subject) {
        throw Error("Please provide a email subject in 'subject' field");
      }

      const to =
        recipients instanceof Array ? recipients.join(",") : recipients;

      let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.from,
          pass: process.env.password,
        },
      });
      let mailOptions = {
        to,
        subject,
        text: message,
      };

      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          return true;
        }
      });
    } catch (err) {
      throw err;
    }
  },
  mailer: async (mailData) => {
    try {
      let res = parseInt(process.env.doEmailSend);
      if(res) {
        await module.exports.sendEmail(mailData);
        return true;
      }
      return true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
