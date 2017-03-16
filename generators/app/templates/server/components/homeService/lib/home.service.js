const Emitter = require('events').EventEmitter;
const util = require('util');
const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const Response = require('./serviceResult.model');

const formatted = bformat({ outputMode: 'short', color: true });
const log = bunyan.createLogger({
  name: 'HomeService',
  level: process.env.LOG_LEVEL || 'info',
  stream: formatted,
  serializers: bunyan.stdSerializers
});

const Model = require('./home.model.js');

const Service = function Service (configuration) {
  Emitter.call(this);
  let self = this;
  let continueWith = null;

  let config = configuration;

  // Validate Service Input
  if (!config) {
    config = {};
  }

  if (!config.name) {
    config.name = process.env.USER || 'DEFAULT VALUE';
  }

  //////////////////////// INITIALIZATION DONE


  // READ
  let readItem = function readItem () {
    log.debug('readItem()');

    let result = new Model(config);
    return self.emit('send-data', result);
  };

  // Create an Okay Result
  let sendData = function sendData (data) {
    let result = new Response();
    result.success = true;
    result.message = 'All Good';
    result.data = data;
    log.trace('SEND SUCCESS');

    if (continueWith) {
      continueWith(null, result);
    }
  };

  // Create a Bad Result
  let sendError = function sendError (err, message) {
    let result = new Response();
    result.success = false;
    result.message = message;
    log.error('SEND ERROR', err);

    if (continueWith) {
      continueWith(null, result);
    }
  };

  /////////////////////////////////////////

  self.read = function read (done) {
    continueWith = done;
    self.emit('read-item');
  };

  self.on('read-item', readItem);
  self.on('send-data', sendData);
  self.on('send-error', sendError);

  return self;
};

util.inherits(Service, Emitter);
module.exports = Service;
