const {model} = require("mongoose") 
const {commentSchema} = require("../Schemas/CommentsSchema")
const commentmodel = new model("comment",commentSchema)
module.exports = {commentmodel}