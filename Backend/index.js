require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const {Signup} = require("./Authcontroller")
const {Login} = require("./login")
const cors = require('cors')
const bodyParser = require("body-parser")
const {holdingmodel} = require("./models/holdingsmodel")
const {positionmodel} = require("./models/postionmodel")
const {watchlistmodel} = require("./models/Watchlistmodels")
const {varsitymodel} = require("./models/varsitymodel")
const {commentmodel} = require("./models/commentmodel")
const {userVerification} = require("./Authmiddleware")
const cookieParser = require("cookie-parser")
let PORT = process.env.PORT | 3002;
let URL = process.env.MONGOURL;
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.listen(PORT,()=>{
    console.log("Listening to app ..")
    mongoose.connect(URL)
    console.log("connected to DB")
})
app.get("/allholding",async(req,res)=>{
    let allholdings = await holdingmodel.find({})
    res.json(allholdings)
})
app.get("/allposition",async(req,res)=>{
    let allpositions = await positionmodel.find({})
    res.json(allpositions)
})
app.get("/allWatchlist",async(req,res)=>{
    let allWatchlist = await watchlistmodel.find({})
    res.json(allWatchlist)
})
app.get("/allvarsity",async(req,res)=>{
    let allvarsity = await varsitymodel.find({})
    res.json(allvarsity)
})
app.get("/allcomment",async(req,res)=>{
    let allcomment = await commentmodel.find({})
    res.json(allcomment)
})
app.post("/Check",userVerification)
app.post("/comment",(req,res)=>{
    const {Name,comment,Month,year,hours,Minutes} = req.body
    const com = new commentmodel({Name:Name,comment:comment,Month:Month,year:year,hours:hours,Minutes:Minutes})
    com.save()
})
app.post("/Signup",Signup)
app.post("/Login",Login)