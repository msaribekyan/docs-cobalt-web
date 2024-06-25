const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/views/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/static/views/login.html");
});

app.get("/upload", (req, res) => {
    res.sendFile(__dirname + "/static/views/upload.html");
});

app.get("/edit", (req, res) => {
    res.sendFile(__dirname + "/static/views/edit.html");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})