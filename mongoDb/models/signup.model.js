const mongoose = require("mongoose")


const userSignup = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true}
})

const signupModel = mongoose.model("User", userSignup)


module.exports = signupModel