const {model} = require("mongoose")
const {userSchema} = require("../Schemas/usersSchema")

const usermodel = new model("user",userSchema)
module.exports=usermodel