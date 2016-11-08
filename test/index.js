var u = require('../.');
var test = require('tape');
var ZSchema = require('z-schema');

ZSchema = new ZSchema({
  breakOnFirstError: true,
  noExtraKeywords: true,
  ignoreUnknownFormats: false,
  reportPathAsArray: true
});

var zip1 = require('./fixtures/postalCodeParam.json');
var zip2 = require('./fixtures/postalCodeParam2.json');
var zip1Schema = require('./fixtures/postalCodeSchema.json');
var zip2Schema = require('./fixtures/postalCodeSchema2.json');

test('param with pattern', function (t) {
  t.plan(3);
  var s = u.paramToSchema(zip1);
  t.deepEqual(s, zip1Schema, '');
  t.equal(true, ZSchema.validate({ postalCode: '1000XX' }, s), 'conforms to ' + JSON.stringify(s));
  t.equal(false, ZSchema.validate({ postalCode: '1000X' }, s), 'does not conform to ' +JSON.stringify(s));
  t.end();
});

test('param without pattern', function (t) {
  t.plan(3);
  var s = u.paramToSchema(zip2);
  t.deepEqual(s, zip2Schema, '');
  t.equal(true, ZSchema.validate({ postalCode: '1000XX' }, s), 'conforms to ' + JSON.stringify(s));
  t.equal(false, ZSchema.validate({ postalCode: 1000 }, s), 'does not conform to ' +JSON.stringify(s));
  t.end();
});

