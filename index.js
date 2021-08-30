const express = require("express");
const app = express();
const port = process.env.PORT || 1801;

app.get("/", (req, res)=>{
    res.json({server_message: "Hello World"});
});

app.listen(port, function(){
    console.log(`Server running in port: ${port}`);
});