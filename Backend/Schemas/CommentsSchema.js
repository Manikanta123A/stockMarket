const {Schema} = require("mongoose")
const commentSchema = new Schema({
    Name:String,
    comment:String,
    Month : {
        type:Number,
        default: new Date().getMonth()
    },
    year:{
        type:Number,
        default: new Date().getFullYear()
    },
    hours:{
        type:Number,
        default:new Date().getHours()
    },
    Minutes:{
        type:Number,
    }
})
module.exports = {commentSchema}