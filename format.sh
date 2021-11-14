#!/usr/bin/env bash
set -o errexit -o pipefail -o nounset

deno fmt --watch ./src
