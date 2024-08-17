const {model} = require("mongoose")
const {holdingsSchema} = require('../Schemas/holdingsSchema')
const holdingmodel = new model ("holding",holdingsSchema)

module.exports = {holdingmodel}