const db = require('client');
const cassandra = require('cassandra-driver');
const path = require('path');
const fs = require('fs');
/*Retrieving data
The execute() method can be used to send a CQL query to a Cassandra node.


const query = "SELECT name, email, birthdate FROM users WHERE key = 'mick-jagger'";
client.execute(query)
  .then(result => {
    const row = result.first();

    // The row is an Object with column names as property keys. 
    console.log('My name is %s and my email is %s', row['name'], row['email']);
  });
Execution methods in the driver return a Promise, you can await on the promise to be fulfilled using async functions. 
Note that for the rest of the documentation, Promise method then() and await will be used interchangeably. 
*/
/*
Authentication (optional)
Using an authentication provider on an auth-enabled Cassandra cluster:

const authProvider = new cassandra.auth.PlainTextAuthProvider('my_user', 'p@ssword1!');

-->Set the auth provider in the clientOptions when creating the Client instance

const client = new Client({ contactPoints, localDataCenter, authProvider });
*/    

const astraSyncController = {};

astraSyncController.connection = async () => {
 try {
   await db.connect(function( err ){
    if( err ){
      console.log("Error: Connection to cassandra server."+err);
    } else {
      console.log("Success !!!");
    }
  });
 } catch (error) {
   log(error);
 } 
}



module.exports = astraSyncController;