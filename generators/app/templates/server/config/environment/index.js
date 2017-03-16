const path = require('path');
const _ = require('lodash');

let all = {
  env: process.env.NODE_ENV || 'development',
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 9000
};

module.exports = _.merge(all, require('./' + all.env + '.js'));
