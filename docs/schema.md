# Schema support

The `Schema` object in [Open API v3 spec][oaschema] describes several properties
that are shared from JSON Schema, deviations from JSON Schema, or in addition
to JSON Schema. The document descibes this project's support for these
properties.

## Properties

The following properties are supported, and implemented according to the
[JSON Schema Validation spec][jsschema]:

- [x] multipleOf
- [x] maximum
- [x] exclusiveMaximum
- [x] minimum
- [x] exclusiveMinimum
- [x] maxLength
- [x] minLength
- [x] pattern
- [x] maxItems
- [x] minItems
- [x] uniqueItems
- [x] maxProperties
- [x] minProperties
- [x] format
- [x] required
- [x] enum

## Adjusted JSON Schema Properties

The OpenAPI specification also supports several additional properties from JSON
Schema, with some adjustments. This project attempts to honor these adjustments,
with any exceptions outlined below:

- [x] type - Value may be an array, multiple types are supported.
- [x] allOf
- [ ] oneOf
- [ ] anyOf
- [ ] not
- [x] items
- [x] properties
- [ ] additionalProperties
- [x] description
- [x] format
- [x] default

## Fixed Fields

At this time, the project supports no [fixed fields][ff].

[ff]: https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.md#fixed-fields-20
[jsschema]: http://json-schema.org/latest/json-schema-validation.html#rfc.section.6
[oaschema]: https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.md#schemaObject
