const express = require('express');
const db = require('client');
const cassandra = require('cassandra-driver');
const path = require('path');
const fs = require('fs');

const astraCreate = require('astraCreateController.js');
const astraSync = require('astraSyncController.js');

const router = express.router();

module.exports = router;