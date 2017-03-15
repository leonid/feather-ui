'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('iprovider service', function() {
  it('registered the iproviders service', () => {
    assert.ok(app.service('iproviders'));
  });
});
