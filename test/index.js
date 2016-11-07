var test = require('tape');
var u = require('../.');

var zip1 = require('./fixtures/postalCodeParam.json');
var zip1Schema = require('./fixtures/postalCodeSchema.json');

test('', function (t) {
  t.plan(1);
  var s = u.paramToSchema(zip1);
  t.deepEqual(s, zip1Schema, '');
  t.end();
});

