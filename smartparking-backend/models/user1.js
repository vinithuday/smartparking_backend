const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  // _id: { type: String, required: false },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: false },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ email: this.email }, process.env.JWTPRIVATEKEY, {
    expiresIn: "60d",
  });
  return token;
};

const User1 = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User1, validate };
