function getAndPrintHTML (options) {
    var https = require("https");
    var obj = {};
    obj.host = requestOptions.host;
    obj.path = requestOptions.path;
      

      function callback(response) {
        var buffer = '';
        response.on('data', function (chunk) {
            buffer += (chunk.toString());
        })
        response.on('end', function() {
            console.log(buffer);
        })
    }


    // marks the end of the file
    https.request(options, callback).end();
}


var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

getAndPrintHTML();