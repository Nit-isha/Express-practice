const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("./index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); //text/html matters
    res.write(homepage); // for writing html
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" }); //text/html matters
    res.write("<h1>about page!</h1>"); // for writing html
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" }); //text/html matters
    res.write("<h1>page not found</h1>"); // for writing html
    res.end();
  }

  //   console.log(req.method);
  //   console.log(req.url);
});

server.listen(5000);
