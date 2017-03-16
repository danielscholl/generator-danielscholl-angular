const errors = require('./components/errors');
const path = require('path');
const pkg = require('../package.json');

module.exports = function (app) {
  const BASE_URL = '/api/v1';

  // Home API Service
  app.use(BASE_URL + '/home', require('./api/home'));

  // Return API Version
  app.route('/api')
   .get((req, res) => res.json({ name: pkg.name, version: 'v1', rev: pkg.version }));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|node_modules|assets)/*')
   .get(errors[404]);

   // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => res.sendFile(path.resolve('client/public' + '/index.html')));

};
