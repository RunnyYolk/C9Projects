var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Bye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!!");
});
// "anything else" ""
app.get("*", function (req, res){
   res.send("You are a star!!"); 
});
// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.")
});