
require("dotenv").config();
const express = require("express");
const router = express.Router();
const { yourDatabaseFunctionToRetrieveParkingHistory } = require('./db');
const app = express();
const cors = require("cors");
const { connectToCollection } = require("./db");
const bodyParser = require("body-parser");
const sendMail = require('./sendMail');

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const locationRoutes = require("./routes/parkingLocationRoute");
const reservationRoutes = require("./routes/userReservationRoute");
const paymentRoutes = require("./routes/paymentRoutes"); 
const authenticator=require("./middleware/authMiddleware")
const initJwtAuth = require("./Controllers/initJWTAuthControllers"); 
const stripe = require('stripe')('sk_test_51Of6H3JdJTq4rwlvmBGPwi50oYx19HaSjU8bmDf6B9PZwIDF489MHOL9FMNMyfLs6bCDsKyoCa30RSCnFwBKeMoX00EFDOdXJs');
connectToCollection("");
app.set('trust proxy', true);

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/authentication",authenticator );
app.use("/api/userReservation",reservationRoutes );
app.use("/initJwtAuth",initJwtAuth );

app.post('/paymentSheet', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,  
      currency: 'eur',  
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const ephemeralKey = 'your_ephemeral_key'; 
    const customer = 'your_customer_id';  

    res.json({ paymentIntent, ephemeralKey, customer });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/create-intent', async (req, res) => {
    try {
      var args = {
        amount: 1099,
        currency: 'usd',
        automatic_payment_methods: {enabled: true},
      };
      const intent = await stripe.paymentIntents.create(args);
      res.json({
        client_secret: intent.client_secret,
      });
    } catch (err) {
      res.status(err.statusCode).json({ error: err.message })
    }
  });


  router.get("/history/:email", async (req, res) => {
    try {
      const userEmail = req.params.email;
  
      if (!userEmail) {
        return res
          .status(400)
          .json({ message: "Invalid request. Please provide user email." });
      }
  
      const userHistory = await userReservation.find({ email: userEmail });
  
      return res.status(200).json(userHistory);
    } catch (error) {
      console.error("Error fetching parking history:", error);
      return res.status(500).json({ message: "Server error" });
    }
  });
  
  
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = router;




