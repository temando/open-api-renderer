# Lincoln

<img src='assets/lincoln-logo-white.png' alt='Lincoln' height="96" width="96" />

[![Travis CI](https://img.shields.io/travis/temando/open-api-renderer.svg)](https://travis-ci.org/temando/open-api-renderer)
[![MIT License](https://img.shields.io/github/license/temando/open-api-renderer.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Meet Lincoln, a [React](https://facebook.github.io/react/) component for rendering [OpenAPI](https://www.openapis.org) v3 [definitions](https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/README.md). The project is tracking against [v3.0.0-rc2](docs/open-api-v3-support.md) of the specification.

This project is inspired by [ReDoc](https://github.com/Rebilly/ReDoc), which currently handles Swagger v2 specs.

> This project is in an early phase of development.

## Prerequisite

- [Node.js](https://nodejs.org) is required to build and manage this project.
- It is assumed that you use [yarn](https://yarnpkg.com) to manage Node.js dependencies and to run scripts. You're welcome to use [npm](https://docs.npmjs.com/), in which case, just substitute `yarn` with `npm`.

## Installation

```sh
yarn
```

## Usage

### Lincoln as a component

To use Lincoln in your React project:

```js
import Lincoln from 'react-lincoln'

<Lincoln definitionUrl='https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC1.json' />
```

> This represents a future state, Lincoln is not published to NPM yet.

### Lincoln demo

To preview Lincoln on your local machine:

```sh
yarn run start
```

Lincoln is now available on <http://localhost:8200>. The port can be changed by updating `webpack.config.dev`.

You need to specify a url for the `Open API v3` file, e.g. <http://localhost:8200?url=https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC2.json>

## Configuration

The following configuration options apply to the Lincoln component:

| property        | required | type    | description                                                                                                         |
| --------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `definitionUrl` | ✔        | string  | CORS-enabled URL to Open API v3 definition to render. Supports JSON or YAML.                                        |
| `navSort`       |          | enum    | `alpha` which sorts by HTTP method, then path or `false`, which will display paths as defined. Defaults to `false`. |
| `validate`      |          | boolean | If `true`, uses [Mermade](https://openapi-converter.herokuapp.com/) to validate definition. Defaults to `false`.    |

## Building & Deployment

To build this project as React component:

```sh
yarn build:library
```

To build the demo located in `/docs/demo`:

```sh
yarn build:demo
```

You can deploy the files at `/docs/demo` to your server.

## Philosophy

While this project is currently focused on visualising Open API V3 specifications, it is architected in such a way that the React components deal with a `UIReadySchema`, which is a generic specification (admittedly heavily based on Open API V3).

The dream is that this renderer could visualise other formats by introducing new parsers which transform documents into the common `UIReadySchema` format. This approach allows us to build something sustainable and scalable, where the community can help contribute new parsers (among other things!) as required.

The project is definitely in its infancy and we are not ready for that yet, but we hope by sharing this vision early, others can help us make it a reality. For contributing information, see [CONTRIBUTING.md](CONTRIBUTING.md).
