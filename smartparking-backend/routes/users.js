const router = require("express").Router();
const { User1, validate } = require("../models/user1");
const bcrypt = require("bcrypt");
const {connectToCollection,disconnectFromCollection} = require("../db");
const { string } = require("joi");

router.post("/", async (req, res) => {
	
	try {
		
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User1.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User1({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });

	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;