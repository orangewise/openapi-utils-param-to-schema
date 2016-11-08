var test = require('tape');
var u = require('../.');

var zip1 = require('./fixtures/postalCodeParam.json');
var zip2 = require('./fixtures/postalCodeParam2.json');
var zip1Schema = require('./fixtures/postalCodeSchema.json');
var zip2Schema = require('./fixtures/postalCodeSchema2.json');

test('param with pattern', function (t) {
  t.plan(1);
  var s = u.paramToSchema(zip1);
  t.deepEqual(s, zip1Schema, '');
  t.end();
});

test('param without pattern', function (t) {
  t.plan(1);
  var s = u.paramToSchema(zip2);
  t.deepEqual(s, zip2Schema, '');
  t.end();
});

