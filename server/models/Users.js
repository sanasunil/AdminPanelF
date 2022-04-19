const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName : {
        type: String,
        required:true,
    },
    password:{
        type : String,
        required : true,
    },
    userType : {
        type: String,
        required:true,
    },
    userToken : {
        type: String,
        required:true,
    },
 },
 { timestamps: true }
)

const UsersModel = mongoose.model("Users",UserSchema)
module.exports = UsersModel;
