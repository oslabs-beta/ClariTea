const db = require('client');
const cassandra = require('cassandra-driver');
const path = require('path');
const fs = require('fs');

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
      console.log("Error: Connection to cassandra server." + err);
    } else {
      console.log("Success!");
    }
  });
 } 
 catch (error) {
   console.log(error);
 } 
}

module.exports = astraSyncController;