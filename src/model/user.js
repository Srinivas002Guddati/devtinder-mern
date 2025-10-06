
const mongoose = require('mongoose');
const validator = require('validator');

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
    trim: true,
    validate: {
        validator: function (value) {
        return validator.isEmail(value);
        },
        message: props => `Invalid email address: ${props.value}`
    }
},
password: {
    type: String,
    validate(value){
        if(!validator.isStrongPassword(value)){
            throw new Error("Enter a strong password");
        }
    }

},
 age: {
        type: Number
    },
    gender: {
        type: String
    },
    photoUrl:{
        type: String,
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