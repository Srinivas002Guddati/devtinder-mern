
const express = require('express');


const app = express();

app.get("/user", (req, res)=>{
    res.send({firstName: "Srinivas, lastName:'G"});
});

app.post("/user", (req, res)=>{
    console.log(req.body);
    res.send('Data successfully saved to the database!');
});
app.delete("/user", (req, res)=>{
    res.send('Deleted successfully!');
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000...");
});

