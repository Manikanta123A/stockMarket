const {Schema} = require("mongoose")
const varsitySchema = new Schema({
    chapter: Number,
    Title: String,
    Content: String,
    TotalChapters: Number,
    ChapterNames: [{type: String}],
    ChapterContents: [{type : String}],
    ChapterLinks:[{type:String}]
})
module.exports= {varsitySchema}