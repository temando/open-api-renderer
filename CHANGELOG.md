# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.4.1][] - 2018-02-23

### Fixed

- [#206](https://github.com/temando/open-api-renderer/issues/206) Added null check for method.tags

## [0.4.0][] - 2018-01-15

### Added

- [#115](https://github.com/temando/open-api-renderer/issues/115) Show security schema per method, it'd be collapsed by default.

### Changed

- Bump `json-schema-ref-parser` dependency, which removes `Promises` and `TypedArrays` polyfills.

### Fixed

- [#204](https://github.com/temando/open-api-renderer/issues/199) Linclon learnt to _only_ display the Authentication section when there was security information in the definition.

## [0.3.0][] - 2017-10-24

### Added

- [#199](https://github.com/temando/open-api-renderer/issues/199) `navigationMethodDisplayType` parameter is added for better customisation of the navigation on the left.

## [0.2.1][] - 2017-10-18

### Added

- Updated example object rendering support `summary`, `description`, and `value` attributes.
- Implement CHANGELOG handling with `changelog-verify` and `version-changelog`.

### Fixed

- [#196](https://github.com/temando/open-api-renderer/issues/196) Validation changed to use POST instead of GET

## [0.2.0][] - 2017-09-14

### Changed

- Various styling enhancements to typography and colours.
- Various package upgrades (both `dependencies` and `devDependencies`)

### Fixed

- [#192](https://github.com/temando/open-api-renderer/issues/192) Swap `isomorphic-fetch` for `fetch-everywhere` to prevent `ReferenceError: self is not defined` error.
- [#176](https://github.com/temando/open-api-renderer/issues/176) Lincoln learnt how to handle circular reference in schema.

## [0.1.0][] - 2017-07-17

### Added

- [#91](https://github.com/temando/open-api-renderer/issues/91) Lincoln learnt how to display `additionalProperties`.
- [#157](https://github.com/temando/open-api-renderer/issues/157) Lincoln learnt how to display `servers` and path information.
- [#112](https://github.com/temando/open-api-renderer/issues/112) Lincoln learnt how to display `externalDocs`.

## [0.0.6][] - 2017-07-07

- Initial release of Lincoln 🎩

[Unreleased]: https://github.com/temando/open-api-renderer/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/temando/open-api-renderer/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/temando/open-api-renderer/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/temando/open-api-renderer/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/temando/open-api-renderer/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/temando/open-api-renderer/compare/v0.0.6...v0.1.0
[0.0.6]: https://github.com/temando/open-api-renderer/tree/v0.0.6
