// const { Request, Response } = require("express");
const jwt = require("jsonwebtoken");
const {User1,validate} = require("../models/user1");
const asyncHandler = require("express-async-handler");

// const { clearToken } = require("../utils/auth");

const initialAuthenticate = asyncHandler(async (req, res) => {
 
    try {
    const token = req.headers["authorization"]
      ? req.headers["authorization"].split(" ")[1]
      : "";
      
 

    const jwtSecret = process.env.JWTPRIVATEKEY || "";
   
    const decoded = jwt.verify(token, jwtSecret);
  
    if (!decoded || !decoded.email) {
    //   clearToken(res);
      return;
    }


  
    const user = await User1.findOne({ email: decoded.email });

    if (!user) {
    //   clearToken(res);
      return;
    }

    if (user && user.email) {
      res.status(201).json({
        email: user.email,
      });
    }
  } catch (e) {
    console.log(e)
    res.status(309).json({ message: "Error with request" });
  }
});

module.exports =  initialAuthenticate ;
