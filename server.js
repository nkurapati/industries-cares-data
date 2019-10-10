var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var allowCrossDomainRequests = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomainRequests);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);