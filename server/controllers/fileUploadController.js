const { Client } = require('cassandra-driver');
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

  const run = async () => {
    try {
    const client = new Client({
      cloud: { secureConnectBundle: filepath },
      credentials: { username: username, password: password }
      });
    await client.connect()
    /*Retrieving data
    The execute() method can be used to send a CQL query to a Cassandra node.
    Execution methods in the driver return a Promise, you can await on the promise to be fulfilled using async functions. 
    Currently limited query to 3 results -> adjust query below before connecting.
    */
    const rs = await client.execute("SELECT json type, title, director FROM movies.movies_and_tv LIMIT 3");
    res.locals.results = rs;
    await client.shutdown();
    return next();
  }
  catch(err) {
    return next({
      log: 'fileuploadController.upload connection error',
      status: 500,
      message: { err: 'Error connecting' },
    });
  }
};
//Runs the async call to connect the client  
run();
};
 
module.exports = fileUploadController;




  
