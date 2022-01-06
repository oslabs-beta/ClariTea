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

  const run = async () => {
    try {
    const client = new Client({
      cloud: { secureConnectBundle: filepath },
      credentials: { username: username, password: password }
      });
    await client.connect()
    //Currently limited query to 3 results
    const rs = await client.execute("SELECT json type, title, director FROM movies.movies_and_tv LIMIT 3")
    console.log(rs);
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
  };
};  
run();
};
 
module.exports = fileUploadController;




  
