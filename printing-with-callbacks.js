function getHTML(obj, callback) {
  var https = require("https");
  var obj = {};
  obj.host = requestOptions.host;
  obj.path = requestOptions.path;

  function callback(response) {
    var buffer = "";
    response.on("data", function(chunk) {
      buffer += chunk.toString();
    });
    response.on("end", function() {
      printHTML(buffer);
    });
  }

  // marks the end of the file
  https.request(obj, callback).end();
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
};

getHTML();
