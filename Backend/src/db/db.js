const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://ashish:ikSt4Jgdg8fSt2xb@cluster1.mkoxo75.mongodb.net/backendrevision")
    console.log("connnected to db")
}

module.exports=connectDB