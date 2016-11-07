
exports.paramToSchema = function (param) {
  var properties = {};
  properties[param.name] = {};
  properties[param.name]['type'] = param.type;
  properties[param.name]['pattern'] = param.pattern;

  var schema = {};
  schema.required = [param.name];
  schema.properties = properties;

  return schema;
};

