
const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/smartparking/';
const client = new MongoClient(uri);

client.connect().then(() => {
  console.log('Connected to the database');
}).catch(err => {
  console.error('Error connecting to the database', err);
  process.exit(1);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const passwordResetTokens = new Map();

app.post('/forgotpassword', async (req, res) => {

 
  
  try {

    const db = client.db('smartparking');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email: req.body.email });
    console.log(user)
    if (!user) {
      return res.status(404).send('User not found');
    }
    let email=req.body.email
    console.log(email)
    const token = crypto.randomBytes(20).toString('hex');
    passwordResetTokens.set(token, { email, timestamp: Date.now() });

    const resetLink = `http://192.168.0.28:4000/resetpassword?token=${token}`;
    const mailOptions = {
      from: 'smartparkingmannheim@gmail.com',
      to: email,
      subject: 'Password Reset',
      html: `<!DOCTYPE html>
        <html lang="en">
        <body style="font-family: Arial, sans-serif;">
            <h1>Smart Parking - Forgot Password</h1>
            <p>Dear Smart Parking User,</p>
            <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
            <p>To reset your password, click on the following link: <a href="${resetLink}">Reset Password</a></p>
            <p>If you have any questions or need further assistance, contact our support team at smartparkingmannheim@gmail.com.</p>
            <p>Thank you for choosing Smart Parking!</p>
        </body>
        </html>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Password reset email sent')
 
  }  catch (error) {
    console.error('Error processing forgot password request:', error);
    res.status(500).send({message:'Internal Server Error'});
  }
});

app.post('/resetpassword', (req, res) => {
  console.log("hi")
  const { token, newPassword } = req.body;

  const resetInfo = passwordResetTokens.get(token);

  if (!resetInfo || Date.now() - resetInfo.timestamp > 3600000) {
    return res.status(400).send('Invalid or expired token');
  }

  const db = client.db('smartparking');
  const usersCollection = db.collection('users');

  usersCollection.updateOne({ email: resetInfo.email }, { $set: { password: newPassword } })
    .then(() => {
      passwordResetTokens.delete(token);
      res.send('Password reset successful');
    })
    .catch((error) => {
      console.error('Error processing forgot password request:', error);
      res.status(500).send('Internal Server Error');
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
