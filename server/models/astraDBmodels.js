// const cassandra = require('cassandra-driver');
// const distance = cassandra.types.distance;
// const path = require('path');
// const fs = require('fs');

// // const options = {
// //   contactPoints,
// //   localDataCenter,
// //   pooling: {
// //     coreConnectionsPerHost: {
// //       [distance.local]: 2,
// //       [distance.remote]: 1
// //     } 
// //   }
// // };
// // use path. resolve to search for a file with secure-connect in its name OR take state of file path from upload?
// // --> * zip to get wildcard and search for any zip file.
// const { filePath } = require('./fileUploadController');

// const client = new cassandra.Client( 
//   {
//   cloud: { secureConnectBundle: upload.filePath },
//   credentials: { username: 'rKhcZkZjAGkSbWZTxorLYUcN', password: 'yIESLvsNB2qke-IM.BZ2ft.Qvs40KO-,Xsz6.q_rxIyhHvy5iQNXlDH,Qqc4ywExP_ZYAMjaduYIMw4,Hnu7Wk-T7vWFhPZ.,vgRz+gdBjfs3D0ZUo,DeC-gKYQ3hv,l' }
// });

// /*
// Even though calling connect() is not required (the execute() method internally calls to connect), 
// it is recommended you call to #connect() on application startup, this way you can ensure that you start your app once 
// your are connected to your cluster.
// */

// client.connect();

// module.exports = client;