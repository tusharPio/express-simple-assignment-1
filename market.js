//Eradani Node-js assignment

var express = require('express'); // requre the express framework
var helmet = require('helmet');
var app = express();
var fs = require('fs'); //require file system object
const port = 3010;
var product = {
  product3: {
    id: '3',
    name: 'CPU',
    cost: 1000,
    description: 'Central Processing Unit',
  },
};

//POST method
app.get('/addProduct', function (req, res) {
  //Step 2: read existing users
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    data = JSON.parse(data);
    //Step 3: append user variable to list
    data['product3'] = product['product3'];
    console.log(data);

    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );

    res.set('Content-Security-Policy', "default-src 'self'");
    res.end(JSON.stringify(data));
  });
});

app.use(helmet());

// GET method
app.get('/getProducts', function (req, res) {
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// Create a server to listen at port 3010
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
