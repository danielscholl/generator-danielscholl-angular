const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./environment');

module.exports = function (app) {
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.use('/scripts', express.static(path.join(config.root, 'node_modules')));
  app.use(express.static(path.join(config.root, 'client')));

  if (config.env === 'development' || config.env === 'test'){
    app.use(morgan('dev'));
    app.use(require('errorhandler')());
  }
};
