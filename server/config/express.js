'use strict';
 
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./index');
 
module.exports = function(app) {
  app.use(compression());
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', path.join(config.root, 'client')); // define the path of our app inside express to use across the server if needed
  app.use(morgan('dev'));
  app.use(errorHandler()); // error handler
};
