const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        name:{
            type:String,
        },
        lastName:{
            type:String,
        },
        address:{
            type:String,
        }
    },{timestamps:true}
)

module.exports = mongoose.model("User",userSchema);