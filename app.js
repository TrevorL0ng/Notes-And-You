//Bringing in modules needed and setting variables
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3005;
const dirPath = path.join(__dirname, "/public");

//Setting Express parameters
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Setting get and post routes
app.get("/notes", function(req, res){
    res.sendFile(path.join(dirPath, "notes.html"));
});

app.get("/api/notes", function(erq,res){
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

//Setting index at the end because get * is weird
app.get("*", function (req,res){
    res.sendFile(path.join(dirPath, "index.html"));
});

app.post("/api/notes", function(req,res){
    let myNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    let newNote = req.body;
    myNotes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(myNotes));
    res.json(myNotes);
});

//Setting up the server to listen for testing
app.listen(port, function() {
    console.log("Welcome to Port Buhgless. How can I help you?");
})