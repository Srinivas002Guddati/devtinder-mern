
const express = require('express');


const app = express();

app.use("/user", 
    (req, res, next)=>{
    console.log('first1');
    next();
}, [(req, res, next)=>{
    console.log('secondone');
    //res.send("sendone");
    next();
}, 
(req, res, next)=>{
    console.log('third');
    //res.send("third");
    next();
}]);

// app.get("/user", (req, res)=>{
//     res.send({firstName: "Srinivas, lastName:'G"});
// });

// app.post("/user", (req, res)=>{
//     console.log(req.body);
//     res.send('Data successfully saved to the database!');
// });
// app.delete("/user", (req, res)=>{
//     res.send('Deleted successfully!');
// });

app.listen(3000, ()=>{
    console.log("server is running on port 3000...");
});

