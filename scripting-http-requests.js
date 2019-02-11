// while https is built-in to Node, it is a module, so it must be required
var https = require("https");

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step1.html"
};

function getAndPrintHTMLChunks(response) {
  response.on("data", function(chunk) {
    console.log("[-- CHUNK OF LENGTH " + chunk.length + " --]");
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(requestOptions, getAndPrintHTMLChunks).end();

console.log("I've made the request!");
