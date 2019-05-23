const sgMail = require("@sendgrid/mail");

const sendMail = () => {
  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: "mjmangus@gmail.com",
    from: "mjmangus@gmail.com",
    subject: "Sending a test",
    text: "This is a test",
    html: "<strong>and easy to do anywhere with node</strong>"
  };
  sgMail.send(msg);
};
