const express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("welcome to express");

});
var server = app.listen(8000,function()
{
    // var host  = server.address().address;
    // var port = server.address.port();
    // console.log(host);
})