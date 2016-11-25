# openapi-utils-param-to-schema

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Convert a param into a schema.

# Installation

```
npm install --save openapi-utils-param-to-schema
```

# Usage

```javascript
var openApiUtils = require('openapi-utils-param-to-schema')

var postalCodeParam = {
  "name": "postalCode",
  "in": "query",
  "required": true,
  "type": "string",
  "pattern": "^[1-9][0-9]{3} ?(?!sa|sd|ss)[A-Z]{2}$"
}

var schema1 = openApiUtils.paramToSchema(postalCodeParam)
console.log(schema1)
/*
{
  "required": ["postalCode"],
  "properties": {
    "postalCode": {
      "type": "string",
      "pattern": "^[1-9][0-9]{3} ?(?!sa|sd|ss)[A-Z]{2}$"
    }
  }
}
*/
```

[npm-badge]: https://badge.fury.io/js/openapi-utils-param-to-schema.svg
[npm-url]: https://badge.fury.io/js/openapi-utils-param-to-schema
[travis-badge]: https://travis-ci.org/orangewise/openapi-utils-param-to-schema.svg?branch=master
[travis-url]: https://travis-ci.org/orangewise/openapi-utils-param-to-schema
