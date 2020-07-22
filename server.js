// 1
var express = require("express");
var app = express();
app.get("/",(req,res)=>{
    res.send("<h1>hello world</h1>")
})
// 2 , 3
app.use((req,res,next)=>{
    console.log(req.method,req.url)
    console.log(new Date().toTimeString());
    next();
});


// 4
app.use(express.json());
app.post("/",(req,res)=>{
    res.send(req.body);
})


// 5
app.use(express.urlencoded({extended:false}))    
app.post("/",(req,res)=>{
    res.send(req.body);
})

// 6
app.use(express.static(__dirname+"/public"))
app.get("/index.html",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

// 7
var logger = require("morgan");
app.use(logger("short"));

// 8
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use("/users", (req, res,next)=>{
    res.cookie("username","ashik");
    next();
})
app.get("/users", (req,res)=>{
    res.send("cookie")
})


// 11
app.get("/users/:name",(req,res)=>{
    res.send("hello " + req.params.name)
})


app.listen(3000, ()=>{
    console.log("this is local server 3000")
})