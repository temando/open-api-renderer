# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][]

### Added

- Updated example object rendering support the summary, description, and value attributes.
- Implement CHANGELOG handling with `changelog-verify` and `version-changelog`.

### Fixed

- [#196](https://github.com/temando/open-api-renderer/issues/196) Validation changed to use POST instead of GET

## [v0.2.0][] - 2017-09-14

### Changed

- Various styling enhancements to typography and colours.
- Various package upgrades (both `dependencies` and `devDependencies`)

### Fixed

- [#192](https://github.com/temando/open-api-renderer/issues/192) Swap `isomorphic-fetch` for `fetch-everywhere` to prevent `ReferenceError: self is not defined` error.
- [#176](https://github.com/temando/open-api-renderer/issues/176) Lincoln learnt how to handle circular reference in schema.

## [v0.1.0][] - 2017-07-17

### Added

- [#91](https://github.com/temando/open-api-renderer/issues/91) Lincoln learnt how to display `additionalProperties`.
- [#157](https://github.com/temando/open-api-renderer/issues/157) Lincoln learnt how to display `servers` and path information.
- [#112](https://github.com/temando/open-api-renderer/issues/112) Lincoln learnt how to display `externalDocs`.

## [v0.0.6][] - 2017-07-07

- Initial release of Lincoln 🎩
