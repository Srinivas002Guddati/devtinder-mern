
const express = require('express');
const connectDB = require('./config/database');
const User = require('./model/user');

const app = express();
app.use(express.json());

app.post("/signup", async (req, res)=>{
    console.log("req", req.body);
    
    try{
        const existingUser = await User.findOne({emailId: req.body.emailId});
        if(existingUser){
            return res.status(409).send("Email already existing");
        }
        const user = new User(req.body);
        await user.save();    
        res.send("User added successfully");
    }catch (err){
        res.status(400).send("Error saving the user: ", err.message); 
    }
});

app.get("/user", async(req, res)=>{
    const userEmail = req.body.emailId;
    try{
        const user = await User.find({emailId: userEmail});
        res.send(user);
    }catch (err){
        res.status(404).send("User not found");
    }
});

app.get("/feed", async (req, res)=>{
    
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        res.status(404).send("Something went wrong");
    }   

});

app.delete("/user", async (req, res)=>{
    const userId = req.body.userId
    try{
        const user = await User.findByIdAndDelete({_id:userId});
        res.send("User deleted successfully");
    }catch (err){
        res.status(404).send("Something went wrong");
    }
});

app.patch("/user", async (req, res)=>{
    const userId = req.body.userId;
    const data = req.body;

    try{
        const existingUser = await User.findOne({emailId: req.body.emailId});
        if(existingUser){
            return res.status(409).send("Email already existing");
        }

        const user = await User.findByIdAndUpdate({_id: userId}, data,{
            returnDocument: "after",
            runValidators: true
        });
        console.log("");
        res.send("User updated successfully");
    }catch (err){
        res.status(404).send("Something went wrong");
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



