// server.js
// init project
var express = require('express');
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/whoami", (request, response) => {
  let userAgent = request.get("User-Agent");
  let os = userAgent.substring(userAgent.indexOf("(") + 1, userAgent.indexOf(')'));
  let ip = request.headers["x-forwarded-for"];
  
  if(ip !== undefined){
    let comma = ip.indexOf(",");
    if(comma !== -1){
      ip = ip.substring(0, comma);
    }
  } else {
    ip = request.connection.remoteAddress || request.socket.remoteAdress || request.connection.socket.remoteAddress
  }
  
  let data = {
    "ip" : ip,
    "lang" : request.get("Accept-Language").split(",")[0],
    "os": os
  }
  
  response.json(data)
  // response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
