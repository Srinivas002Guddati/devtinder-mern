
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
        minLength: 4
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    age: {
        type: Number
    },
    gener: {
        type: String,
        validate(value){
            if(!['male', 'female', 'others'].includes(value));
            throw new Error("Gender data is not valid")
        }
    },
    photoUrl:{
        type: String
    },
    about: {
        type: String,
        default: "this is a deafult about of the user"
    },
    skills: {
        type: [String]
    }      
    
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;