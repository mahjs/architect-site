const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/script.js"));
});
app.get("/tilt.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/tilt.js"));
});

app.get("/images/bg.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/bg.jpg"));
});
app.get("/images/contact-bg.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/contact-bg.jpg"));
});
app.get("/images/house.png", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/house.png"));
});
app.get("/images/person-1.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/person-1.jpg"));
});
app.get("/images/person-2.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/person-2.jpg"));
});
app.get("/images/person-3.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/person-3.jpg"));
});

app.listen(process.env.PORT || 3000);
