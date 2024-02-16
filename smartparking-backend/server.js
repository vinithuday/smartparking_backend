require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const {connectToCollection} = require("./db");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const locationRoutes=require("./routes/parkingLocationRoute")



connectToCollection("");
// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/locations", locationRoutes);

const port =  3000;
app.listen(port, console.log(`Listening on port ${port}...`));