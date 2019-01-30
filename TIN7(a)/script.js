
var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("index");
});


app.get("/add/:num1/:num2", function(request, response){
    var n1 = parseFloat(request.params.num1);
    var n2 = parseFloat(request.params.num2);
    var sum = n1 + n2;
    response.render("add", {number:sum});
});

app.get("/sub/:num1/:num2", function(request, response){
    var n1 = parseFloat(request.params.num1);
    var n2 = parseFloat(request.params.num2);
    var sum = n1 - n2;
    response.render("sub", {number:sum});
});

app.get("/mult/:num1/:num2", function(request, response){
    var n1 = parseFloat(request.params.num1);
    var n2 = parseFloat(request.params.num2);
    var sum = n1 * n2;
    response.render("mult", {number:sum});
});

app.get("/div/:num1/:num2", function(request, response){
    var n1 = parseFloat(request.params.num1);
    var n2 = parseFloat(request.params.num2);
    var sum = (n1 / n2);
    response.render("div", {number:sum});
});


app.listen(3000, function(){
    console.log("server starting on port 3000");
});