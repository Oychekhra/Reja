console.log("web serverni boshlash");
const { Console } = require("console");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf8",(err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
});



// 1 => Kirish code
app.use(express.static("public")); //=> har qanday browserdan kirib kelayotgan sorovnomalar uchun faqat  public folder ochiq  
app.use(express.json()); // => kirib kelayotgan json formatdagi data object holatga ozgartirib beradi
app.use(express.urlencoded({extended: true})); // => htmldan traditional request (form) larni qabul qiladi

// 2 => Session code

// 3 Views code (backendda frontend yasash)
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing code
// app.get("/hello", function(req, res) {
//         res.end("<h1 style='background: red'>HELLO WORLD by Oychehra</h1>");
// });

// app.get("/gift", function(req, res) {
//     res.end("<h1 style='color: blue'>You are at gifts page</h1>");
// });
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
})

app.get("/author", (req, res) => {
   res.render("author", {user: user});
})

app.get('/', function(red, res) {
    res.render('reja');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});