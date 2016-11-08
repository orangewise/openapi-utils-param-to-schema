
exports.paramToSchema = function (param) {
  var properties = {};
  properties[param.name] = {};
  if (param.type)    properties[param.name]['type'] = param.type;
  if (param.pattern) properties[param.name]['pattern'] = param.pattern;

  var schema = {};
  if (param.required) schema.required = [param.name];
  schema.properties = properties;

  return schema;
};

