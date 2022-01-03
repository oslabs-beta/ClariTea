const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;
const cassandra = require('cassandra-driver');
// const router = require('./routes/apiRouter.js');
const fileUploadController = require('./controllers/fileUploadController.js')


app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.post('/api/fileUpload', fileUploadController.upload, (req, res) => {
  return res.status(200).json({ results: res.locals.results }) 
});


//THE LOGIC BELOW HAS BEEN MOVED TO FILEUPLOADCONTROLLER MIDDLEWARE

// const path = 'server/secure-connect-servertest.zip';
// const { Client } = require('cassandra-driver');
// async function run () {const client = new Client({
// cloud: { secureConnectBundle: path },
// credentials: { username: 'YKZipmZFWjYIQsiXSeTHDkjB', password: 'vHW4ZsCoBvF678I9wxKA,+W-P24p20YLFlxKNyxkR9--1jl_IP0gC7WOz2uFDPJCbaL.jr02EzD2PzwHmaHkJf-go8LR-aiIOZih+gTkH8L32KwOzCdfHZ9fj8REIYhZ' }});
// await client.connect();
// // Execute a query
// const rs = await client.execute("SELECT * FROM system.local");
// console.log(`Your cluster returned ${rs.rowLength} row(s)`);
// await client.shutdown();
// }



// //if we want to serve static files, app.use goes here.
// app.use('/api', router);

// app.get('/api', (req, res) => {
//   // res.send(mockResponse);
//   return res.status(200).json();
// });
app.get('/', (req, res) => {
  //* Run the async function
 res.status(200).send('Hello World!');
});

app.get('*', (req, res) => res.status(404).send(`Hi I'm a cute page that tells you you done messed up`));

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown connection error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});

module.exports = app;