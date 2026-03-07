require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ Validation
    if (!name || !email || !message) {
      return res.status(400).send("All fields required");
    }

    // ✅ Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // ✅ Send mail
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Portfolio Contact",
      text: `${name} (${email}) : ${message}`
    });

    res.send("Message sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => console.log("Server running on 5000"));