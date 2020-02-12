require("dotenv").config();
const express = require("express");
// const session = require("express-session");
// const massive = require("massive");
const nodemailer = require("nodemailer");

const app = express();
const {
    SERVER_PORT,
    // CONNECTION_STRING,
    // SESSION_SECRET,
    // NODE_ENV,
    // MAIL_USER,
    // MAIL_PASSWORD,
    // FROM,
    // TO
} = process.env;
  
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: MAIL_USER,
//       pass: MAIL_PASSWORD
//     }
//   });
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
  
app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));