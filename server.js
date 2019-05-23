var express = require("express");
var app = express();
const sgMail = require("@sendgrid/mail");
const mailApiKey = require("./config/keys").SENDGRID_API_KEY;

app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.post("/submit-contact", (req, res) => {
  sgMail.setApiKey(mailApiKey);

  const msg = {
    to: "mjmangus@gmail.com",
    from: "portfolio@gmail.com",
    subject: "Contacting you from your portfolio page",
    html: `Name: ${req.body.name}<br>
    Email: ${req.body.email}<br><br>
    ${req.body.message}`
  };
  sgMail.send(msg);

  res.end();
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
