function getAndPrintHTML () {
    var https = require("https");
    var requestOptions = {
        host: "sytantris.github.io",
        path: "/http-examples/step2.html"
      };
      

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
    https.request(requestOptions, callback).end();
}

getAndPrintHTML();