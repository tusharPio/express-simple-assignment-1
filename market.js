//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
const port = 3010;

// Endpoint to Get a list of users
app.get('/getUsers', function (req, res) {
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    console.log(data);
    res.end(data); // you can also use res.send()
  });
});

// Create a server to listen at port 8080
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
