# Open API Renderer

[![Travis CI](https://img.shields.io/travis/temando/open-api-renderer.svg)](https://travis-ci.org/temando/open-api-renderer)
[![MIT License](https://img.shields.io/github/license/temando/open-api-renderer.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![Github Forks](https://img.shields.io/github/forks/temando/open-api-renderer.svg?style=social&label=Fork)](https://github.com/temando/open-api-renderer/network)
[![Github Issues](https://img.shields.io/github/issues-raw/temando/open-api-renderer.svg)](https://github.com/temando/open-api-renderer/issues)

Open API Renderer is a project intended to visualise [Open API](https://www.openapis.org) v3 [definition files](https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/README.md).

It is built on [React](https://facebook.github.io/react/).

> This project is in an early phase of development.

## Getting started

[Node.js](https://nodejs.org) is required to build and manage this project.

Run the following commands to preview the Open API renderer:

```sh
npm install
npm run dev
```

Or using [`yarn`](https://yarnpkg.com):

```sh
yarn
yarn run dev
```

The renderer is then available on <http://localhost:8200>. The port can be changed by updating `config/default.yml`.

## Other commands

### Linting

To lint the project:

```sh
npm run lint
```

Or using [`yarn`](https://yarnpkg.com):

```sh
yarn run lint
```
