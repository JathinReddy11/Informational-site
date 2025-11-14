const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let filename = "";
  if (req.url === "/") {
    filename = "index.html";
  } else if (req.url === "/about") {
    filename = "about.html";
  } else if (req.url === "/contact-me") {
    filename = "contact.html";
  } else {
    filename = "404.html";
  }

  fs.readFile(filename, "utf8", (err, data) => {
    if (filename != "404.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
    }
    res.end(data);
  });
});
server.listen(8080, () => {
  console.log("Server running at port http://localhost:8080");
});
