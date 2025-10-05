
const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://srinivasgmca002_db_user:r3qbwUEYkgVjMwR7@cluster0.4ytvhhf.mongodb.net/devTinder");
};

module.exports = connectDB;