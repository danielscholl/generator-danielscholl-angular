process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const chalk = require('chalk');
const config = require('./config/environment');
const app = express();
const server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, () => {
  console.log(
    chalk.cyan('\nAPI server listening on port ') +
    chalk.yellow('%d') +
    chalk.cyan(', in ') +
    chalk.yellow('%s') +
    chalk.cyan(' mode.\n'),
    config.port,
    app.get('env')
  );
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(
      chalk.red('\nAPI server listening on port ') +
      chalk.yellow('%d') +
      chalk.red(', in ') +
      chalk.yellow('%s') +
      chalk.red(' mode.\n'),
      config.port,
      app.get('env')
    );
  } else {
    process.exit(1);
  }
});

// Expose app
exports = module.exports = server;
