
const express = require('express');


const app = express();

app.get("/", (req, res)=>{
    res.send('Hello from the server!');
});

app.get("/test", (req, res)=>{
    res.send('Hi test! test');
});
app.get("/hello", (req, res)=>{
    res.send('Hello from hello!');
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000...");
});

