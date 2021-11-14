#!/usr/bin/env bash
set -o errexit -o pipefail -o nounset

deno bundle ./src/main.js --watch ./dist/space-travel.js

