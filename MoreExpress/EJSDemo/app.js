var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res){
   var thing = req.params.thing;
   res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post1", author: "suzy"},
        {title: "Adorable pet bunny", author: "Sebas"},
        {title: "Can you believe this chump", author: "Nick"}
    ];
    
    res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening. Careful what you say...");
});