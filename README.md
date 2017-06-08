# Open API Renderer

[![Travis CI](https://img.shields.io/travis/temando/open-api-renderer.svg)](https://travis-ci.org/temando/open-api-renderer)
[![MIT License](https://img.shields.io/github/license/temando/open-api-renderer.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Open API Renderer is a project intended to visualise [Open API](https://www.openapis.org) v3 [definition files](https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/README.md).

It is built on [React](https://facebook.github.io/react/).

This project is inspired by [ReDoc](https://github.com/Rebilly/ReDoc), which currently handles Swagger v2 specs.

> This project is in an early phase of development.

## Prerequisite

- [Node.js](https://nodejs.org) is required to build and manage this project.
- It is assumed that you use [yarn](https://yarnpkg.com) to manage node.JS dependencies and to run scripts. You're welcome to use [npm](https://docs.npmjs.com/), in which case, just substitute `yarn` with `npm`.

## Installation

```sh
yarn
```

## Usage

To view the renderer on your local machine:

```sh
yarn run start
```

The renderer is then available on <http://localhost:8200>. The port can be changed by updating `webpack.config.dev`.

You need to specify a url for the `Open API v3` file, e.g. <http://localhost:8200?url=https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC1.json>

## Deployment to production

Run the following to generate the artifacts at `/dist`:

```sh
yarn run build:prod
```

Deploy the files at `/dist` to your server.

## Philosophy

While this project is currently focused on visualising Open API V3 specifications, it is architectured in such a way that the React components deal with a `UIReadySchema`, which is agnostic (but heavily based on Open API V3) of specification.

The dream is that this renderer could visualise other formats by introducing new parsers which transform documents into the common `UIReadySchema` format. This approach allows us to build something sustainable and scalable, where the community can help contribute new parsers (among other things!) as required.

The project is definitely in it's infancy and we are not ready for that yet, but we hope by sharing this vision early, others can help us make it a reality. For contributing information, see [CONTRIBUTING.md](CONTRIBUTING.md).
