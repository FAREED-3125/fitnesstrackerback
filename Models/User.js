const mongoose = require("mongoose");
const { Schema } = mongoose;

//validator imports 
const validator = require('validator');

//bcrypt Imports
var bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//Checking EMail whether exist already and creating Users\
UserSchema.statics.signup = async function(username, email, password){
    if(email === "" || password === "" || username === ""){
        throw Error("All the field must be Entered.")
    }

    if(!validator.isEmail(email) ){
        throw Error("Email is not Valid.")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is Weak.")
    }
    const exist = await this.findOne({ email }) ||  await this.findOne({username});
    if (exist) throw Error("Email or Username already Exist.");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
  
    const User = await this.create({ username, email, password: hash });
    return User;
  };

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
