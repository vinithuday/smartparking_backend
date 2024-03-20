const router = require("express").Router();
const { User1, validate } = require("../models/user1");
const bcrypt = require("bcrypt");
const {connectToCollection,disconnectFromCollection} = require("../db");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User1.findOne({ email: req.body.email });
		if (!user){
			return res.status(401).send({ message: "Invalid Email or Password" });
		}
			

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" ,email:req.body.email});
	    
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;