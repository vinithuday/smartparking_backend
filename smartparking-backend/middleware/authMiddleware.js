const jwt = require("jsonwebtoken");
const { User1, validate } = require("../models/user1");
const mongoose = require("mongoose"); 

const router = require("../routes/auth");

  authenticator =async (req, res) => {
	
	 try {
    const jwtSecret = process.env.JWTPRIVATEKEY || "";
    const decoded = jwt.verify(req.body.jwt, jwtSecret);
    const user = await User1.findById(mongoose.Types.ObjectId(decoded._id)
    );
    if (!user) {
    } else {
      console.log('User found:', user);
      res.status(200).send({ data: {
        isTokenValid:decoded,
        userInfo:  user
      }, message: "logged in successfully" });
    }
  } catch (error) {
    console.error('Error in findOne query:', error);
    throw error;
  }
};


module.exports=authenticator;