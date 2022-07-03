//Eradani Node-js assignment

var express = require('express'); // requre the express framework
var helmet = require('helmet');
var app = express();
var fs = require('fs'); //require file system object
const port = 3010;
var id = 3;
var name = 'Monitor';
var product = {
  product3: {
    id: '3',
    name: 'CPU',
    cost: 1000,
    description: 'Central Processing Unit',
  },
};

// GET method
app.get('/getProducts', function (req, res) {
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
});

//POST method
app.get('/addProduct', function (req, res) {
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    data = JSON.parse(data);
    data['product3'] = product['product3'];
    console.log(data);
    res.end(data);
  });
});

//DELETE method
app.get('/deleteProduct', function (req, res) {
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    data = JSON.parse( data );
    data['product3'] = product['product3'];
    //delete data["user" + 3];
    console.log(data);
    res.end(data);
  });
});

//PUT method
app.get('/updateProduct/:id', function (req, res) {
  fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
    data = JSON.parse( data );
    var product = users["product" + req.params.id]
    data['product3'] = user;
    console.log(data);
    res.end(data);
  });
});

//Comment the actual POST, PUT, and DELETE method as it is not working in stackblitz
//and perform all the operations buy using GET method.

// //POST method
// app.post('/addProducts', function (req, res) {
//   //Step 2: read existing users
//   fs.readFile(__dirname + '/' + 'product.json', 'utf8', function (err, data) {
//     data = JSON.parse(data);
//     //Step 3: append user variable to list
//     data['product3'] = product['product3'];
//     console.log(data);
//     res.set('Content-Security-Policy', "default-src 'self'");
//     res.end(JSON.stringify(data));
//   });
// });

// //DELETE method
// app.delete('/deleteUser', function (req, res) {
//    // First retrieve existing users
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + 3];
       
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// Create a server to listen at port 3010
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
