var express =require("express");
var bodyParser=require("body-parser");
var https =require("https");
var app =express();
app.use(express.static("public"));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});
app.listen(3000,function()
{
  console.log("Server is running on port 3000.")
})