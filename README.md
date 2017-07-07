# Lincoln

<img src='assets/lincoln-logo-white.png' alt='Lincoln' height="96" width="96" />

[![NPM](https://img.shields.io/npm/v/react-lincoln.svg)](https://npmjs.org/packages/react-lincoln/)
[![Travis CI](https://img.shields.io/travis/temando/open-api-renderer.svg)](https://travis-ci.org/temando/open-api-renderer)
[![MIT License](https://img.shields.io/github/license/temando/open-api-renderer.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Meet Lincoln, a [React](https://facebook.github.io/react/) component for rendering [OpenAPI](https://www.openapis.org) definitions. The project is tracking against [v3.0.0-rc2](docs/open-api-v3-support.md) of the OpenAPI specification.

Lincoln aims to support evergreen browsers, such as Chrome, Firefox, Safari and IE11+. It is responsive and should be usable on most modern devices.

[Demo](https://temando.github.io/open-api-renderer/demo/?https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC2.json)

## Installation

> This represents a future state, Lincoln is not published to NPM yet.

```sh
npm install --save react react-dom react-lincoln
```

## Usage

> This represents a future state, Lincoln is not published to NPM yet.

To use Lincoln in your React project:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Lincoln from 'react-lincoln'

ReactDOM.render(
  <Lincoln definitionUrl='https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC2.json' />,
  document.body
)
```

Alternatively, you can pass the contents of the definition directly to Lincoln:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Lincoln from 'react-lincoln'
import definition from './myApi.yml'

ReactDOM.render(<Lincoln definition={definition} />, document.body)
```

## Configuration

The following configuration options are available:

| property                        | required | type    | description                                                                                                                                                                                                                         |
| ------------------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `definitionUrl` or `definition` | ✔        | string  | CORS-enabled URL to, or contents of, Open API v3 definition to render. Supports JSON or YAML.                                                                                                                                       |
| `navSort`                       |          | enum    | This property applies when your definition uses `tags`. Valid values are `alpha` which sorts by HTTP method, then path or `false`, which will display paths as defined. Defaults to `false`.                                        |
| `validate`                      |          | boolean | If `true`, uses [Mermade](https://openapi-converter.herokuapp.com/) to validate definition. Defaults to `false`.                                                                                                                    |
| `initialSchemaTreeDepth`        |          | number  | The initial opened tree depth for schema visualiser when first rendered. This is useful when the schema's actual contents is a couple of levels deep, and you want to expand the tree to the contents automatically. Defaults to 0. |

## Philosophy

While this project is currently focused on visualising Open API V3 specifications, it is architected in such a way that the React components deal with a `UIReadySchema`, which is a generic specification (admittedly heavily based on Open API V3).

The dream is that this renderer could visualise other formats by introducing new parsers which transform documents into the common `UIReadySchema` format. This approach allows us to build something sustainable and scalable, where the community can help contribute new parsers (among other things!) as required.

The project is definitely in its infancy and we are not ready for that yet, but we hope by sharing this vision early, others can help make it a reality. For contributing information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Credit

- The [ReDoc](https://github.com/Rebilly/ReDoc) project inspired Lincoln. If you're looking for an alternative renderer, give ReDoc a try!
- [swagger2openapi](https://github.com/mermade/swagger2openapi) which Lincoln uses to validate definitions.

## Maintainers

Lincoln is an open source project from [Temando](http://temando.com/)'s Developer Experience team. Temando connects carriers with retailers and retailers to people. The Temando Platform combines shipping experiences, multi-carrier connectivity and lightning fast fulfillment in one solution. If this sounds like fun, [work with us](http://temando.com/en/about/careers)!
