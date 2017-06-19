#!/bin/bash

yarn webpack:library

# Copy latent, belonging to the index module
cp package.json dist/library
cp README.md dist/library
