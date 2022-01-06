import regeneratorRuntime from "regenerator-runtime";

const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
    global.testServer = await require('./server/server.js');
    return {
    verbose: true,
  };
};