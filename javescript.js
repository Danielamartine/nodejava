const express = require('express')
const app = express()
let id;
let name;
let lastName;
let old;


app.use(express.json());

app.post('/', function(request, response){

  id=request.body.id
  console.log(request.body.id);      // your JSON
   response.send(request.body);    // echo the result back
   
   
  name=request.body.name
   console.log(request.body.name);      // your JSON
    response.send(request.body);    // echo the result back

  lastName=request.body.lastName
    console.log(request.body.lastName);      // your JSON
     response.send(request.body);    // echo the result back

  old=request.body.old
  console.log(request.body.old);      // your JSON
   response.send(request.body);    // echo the result back


});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/id', function (req, res) {
  res.send('1014306072')
})

app.get('/name', function (req, res) {
  res.send('Daniela')
})

app.get('/lastName', function (req, res) {
  res.send('Martinez')
})

app.get('/old', function (req, res) {
  res.send('"22"')
})

app.listen(3000)