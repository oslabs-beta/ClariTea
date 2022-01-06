const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;
const fileUploadController = require('./controllers/fileUploadController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.post('/api/fileUpload', fileUploadController.upload, (req, res) => {
  return res.status(200).json({ results: res.locals.results }) 
});

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