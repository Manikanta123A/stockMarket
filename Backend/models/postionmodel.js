const {model} = require("mongoose")
const {positionSchema} = require('../Schemas/positionSchema')
const positionmodel = new model ("position",positionSchema)

module.exports = {positionmodel}