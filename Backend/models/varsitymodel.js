const {model} = require("mongoose")
const {varsitySchema} = require("../Schemas/varsitySchema")
const varsitymodel = new model("varsity",varsitySchema)

module.exports={varsitymodel};