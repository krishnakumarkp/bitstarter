var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

var indexFile = './index.html';

app.get('/', function(request, response) {
  fs.exists(indexFile,function(exists){
    if(exists){
      var indexFileContent = fs.readFileSync(indexFile);
      response.send(indexFileContent.toString("utf8"));
    }else {
      console.error('Couldnot find file:'+indexFile);
      response.send("File not found");
    }
  });
});

app.use("/images", express.static(__dirname + "/images"));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
