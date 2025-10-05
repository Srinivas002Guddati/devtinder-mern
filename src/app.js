
const express = require('express');
const connectDB = require('./config/database');
const User = require('./model/user');

const app = express();
app.use(express.json());

app.post("/signup", async (req, res)=>{
    console.log("req", req.body);

    const user = new User(req.body);
    try{
        await user.save();    
        res.send("User added successfully");
    }catch (err){
        res.status(400).send("Error saving the user: ", err.message); 
    }
});

connectDB().then(()=>{
    console.log("Database connection established...");
    app.listen(3000, ()=>{
    console.log("server is running on port 3000...");
});

}).catch((err)=>{
    console.log("Database connection established...");
});



