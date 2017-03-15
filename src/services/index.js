'use strict';
const message = require('./message');
const iprovider = require('./iprovider');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(iprovider);
  app.configure(message);
};
