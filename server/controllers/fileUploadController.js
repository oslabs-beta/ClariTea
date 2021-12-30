// const path = require('path');
// const fs = require('fs');
const { Client } = require('cassandra-driver')
const fileUploadController = {};

fileUploadController.upload = (req, res, next) => {
  const { username, password, filepath } = req.body;
    console.log(req.body);
  if(!username || !password || !filepath) {
    return next({
    log: 'fileuploadController.upload connection error',
    status: 500,
    message: { err: 'Error connecting' },
  });
  }  
  const client = new Client({
    cloud: { secureConnectBundle: filepath },
    credentials: { username: username, password: password }
    });
    client.connect()
    .then(console.log('connected'))
    .then(console.log(client.execute("SELECT * FROM system.local")));
    // const rs = client.execute("SELECT * FROM system.local")
    // .then(console.log(`Your cluster returned ${rs.rowLength} row(s)`));
};
 

  // await client.shutdown();
module.exports = fileUploadController;

// export a var for use in astraDBmodels