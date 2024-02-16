
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
const parkingLocationRoute = require('./routes/parkingLocationRoute');
const userReservationRoute = require('./routes/userReservationRoute');
const cors = require('cors'); 



const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/smartparking')
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const stripe = require('stripe')('sk_test_51Of6H3JdJTq4rwlvmBGPwi50oYx19HaSjU8bmDf6B9PZwIDF489MHOL9FMNMyfLs6bCDsKyoCa30RSCnFwBKeMoX00EFDOdXJs');

app.post('/payment-sheet', async (req, res) => {
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2023-10-16'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51Of6H3JdJTq4rwlvgr7ZKl9zgO3Yb9BsHXsulD3Rm8EfttFTYQJ3PGY5OEAd9wrnfealZRR59RDELocfqtPmufcV005iOZ9Ioz'
  });
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vinithrajbmu:7YIdkz09xSGsAyRo@cluster0.sginhlx.mongodb.net/"
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: false,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

 app.use(express.json());

app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api', parkingLocationRoute);
app.use('/api', userReservationRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} HI`);
});

