const User = require("./models/usermodel");
const bcrypt = require("bcrypt")
const {createSecretToken} = require("./SecreToke")
module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       return res.json({token:token,sucess:"suceed",user:user.username});
    } catch (error) {
      console.error(error);
    }
  }