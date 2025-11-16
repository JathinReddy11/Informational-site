const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    res.send(data);
  });
});
app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf8", (err, data) => {
    res.send(data);
  });
});
app.get("/contact", (req, res) => {
  fs.readFile("contact.html", "utf8", (err, data) => {
    res.send(data);
  });
});
app.get("/*splat", (req, res) => {
  fs.readFile("404.html", "utf8", (err, data) => {
    res.status(404).send(data);
  });
});
app.listen(8080, () => {
  console.log("server running on port 8080");
});
