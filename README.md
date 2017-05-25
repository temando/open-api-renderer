# Open API Renderer

[![Travis CI](https://img.shields.io/travis/temando/open-api-renderer.svg)](https://travis-ci.org/temando/open-api-renderer)
[![MIT License](https://img.shields.io/github/license/temando/open-api-renderer.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![Github Forks](https://img.shields.io/github/forks/temando/open-api-renderer.svg?style=social&label=Fork)](https://github.com/temando/open-api-renderer/network)
[![Github Issues](https://img.shields.io/github/issues-raw/temando/open-api-renderer.svg)](https://github.com/temando/open-api-renderer/issues)

Open API Renderer is a project intended to visualise [Open API](https://www.openapis.org) v3 [definition files](https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/README.md).

It is built on [React](https://facebook.github.io/react/).

This project is inspired by [ReDoc](https://github.com/Rebilly/ReDoc), which currently handles Open API v2 specs.

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
