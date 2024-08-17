const User = require("./models/usermodel");
const { createSecretToken } = require("./SecreToke");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, username,password} = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const existingemail = await User.findOne({username})
    if (existingemail){
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username});
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.json({token:token,sucess:"signed in sucessfully",user:username})
    next();
  } catch (error) {
    console.error(error);
  }
};