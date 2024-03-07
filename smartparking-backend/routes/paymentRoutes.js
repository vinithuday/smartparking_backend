const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  const { user, amount } = req.body;

  try {
    const newPayment = new Payment({
      user,
      amount,
    });

    const savedPayment = await newPayment.save();
    res.json(savedPayment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
