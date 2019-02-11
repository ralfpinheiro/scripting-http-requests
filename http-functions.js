module.exports = function getHTML(requestOptions, callback) {
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
};

function printHTML(html) {
  console.log(html);
}
