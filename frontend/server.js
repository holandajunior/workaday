var express = require('express');
var path = require("path");

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8070;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// Explanation in https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#configuring-your-server
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})


app.listen(port, function() {
    console.log('Running on http://localhost:' + port);
});
