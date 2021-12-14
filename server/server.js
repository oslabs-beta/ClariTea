const express = require('express');
const path = require(path);
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/apiRouter.js');

// const mockResponse = {
//   Hello: 'World',
//   boiler: 'plate'
// };

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//if we want to serve static files, app.use goes here.
app.use('/api', router);

app.get('/api', (req, res) => {
  // res.send(mockResponse);
  return res.status(200).json();
});
app.get('/', (req, res) => {
 res.status(200).send('Hello World!');
});

app.get('*', (req, res) => res.status(404).send(`Hi I'm a cute page that tells you you done messed up`));

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
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