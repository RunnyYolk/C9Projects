var express = require("express");
var app = express();

// Visiting "/" prints "Hi there, welcome to my Express assignment."
app.get("/", function(req, res){
    res.send("Hi there, welcome to my Express assignment!");
});

// Visiting "/speak/:animal" prints "The <animal> says <'animalSound'>"
app.get("/speak/:animal", function(req, res){
    var sound = {
        dog: "Woof Woof",
        cat: "Meow",
        cow: "Moo",
        mouse: "Squeak",
        owl: "Fuck off"
    };
    
    var animal = req.params.animal;
    res.send("The "+ animal + " goes " + "'"+ sound[animal] + "'");
});

// Visiting "/repeat/:word/:n" prints the word <n> number of times
app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = parseInt(req.params.num);
    var str = "";
    console.log(word);
    console.log(num);
    for (var i = 0; i < num; i++) {
        str += word + " ";
    }
    res.send(str);
})

// Visiting any other URL prints "Not found..."
app.get("/*", function(req, res) {
    res.send("Sorry, page not found. Go back to start and miss a go!");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started. BOOM")
});