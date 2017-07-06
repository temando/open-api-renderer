# Contributing to Lincoln

Thanks for being interested in contributing to Lincoln! Lincoln is Temando's first major open source project so bear with us while we iron out the kinks. The following describes some basic information that should help you get started.

## Getting Started

To contribute to the project, the following prerequisites are required:

- At minimum, [Node 6+](https://nodejs.org) is required to build and manage this project.
- Familiarity with [yarn](https://yarnpkg.com) or [npm](https://docs.npmjs.com/).

To preview Lincoln on your local machine:

```sh
yarn
yarn start
```

Lincoln is now available on <http://localhost:8200>. You need to specify a url for the `Open API v3` definition, e.g. <http://localhost:8200?url=https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC2.json>, or you can paste your definition directly into the UI.

## Linting

Lincoln is written adhering to the [StandardJS](https://standardjs.com/) code style. [ESLint](http://eslint.org/) is used to enforce [`standard`](https://github.com/feross/eslint-config-standard) and [`standard-react`](https://github.com/feross/eslint-config-standard-react) rule sets.

## Testing

Lincoln uses [Jest](https://facebook.github.io/jest/) for testing. Tests should be committed with each code change to ensure regressions do not occur.

> Test coverage is not currently enforced, but it will be in the future.

## Building & Deployment

To build this project as React component, located in `dist/library`:

```sh
yarn build:library
```

To build the demo located in `/docs/demo`:

```sh
yarn build:demo
```

## Github & Merge Requests

> We prefer small, focused MR's rather than large complex MR's whenever possible.

We use [Github projects](https://github.com/temando/open-api-renderer/projects) to manage phases of development. If you'd like to chip in:

1. Open a project and look at the *TODO* column for unassigned work. Generally it's in priority order.
1. Leave a note on the issue saying you'd like to tackle it.
1. Create a new branch in your fork and begin!
1. When raising the MR, include as much detail as possible to help the reviewer

Alternatively, sometimes we have ideas that we are not sure how to approach, or don't fit in with our priorities. These issues are labelled as [wishes](https://github.com/temando/open-api-renderer/issues?q=is%3Aissue+is%3Aopen+label%3Awish). Feel free to tackle one of these or contribute any feedback.

## Versioning

Lincoln will, in future, abide to [semver](http://semver.org/) and [keep a changelog](http://keepachangelog.com/en/1.0.0/). Right now we are at the peak of development and until we reach a release, these processes would add extra overhead that we are not willing to absorb just yet.
