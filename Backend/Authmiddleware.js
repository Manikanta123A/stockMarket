const User = require("./models/usermodel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports.userVerification = async(req, res,next) => {
  const token = req.body.token
  if (!token) {
    return res.json({ status: "adf" })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: "fda" })
    } else {
      const user = await User.findById(data.id)
      if (user) {
        res.json({sucess:"sucess",user:user.username})
      }
      else { return res.json({ status: "dfa" })}
    }
  })
}