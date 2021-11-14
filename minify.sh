#!/usr/bin/env bash
set -o errexit -o pipefail -o nounset

# esbuild
# brew install esbuild
esbuild ./dist/space-travel.js --bundle --outfile=./dist/space-travel.min.js --minify 
#--sourcemap --target=chrome58,firefox57,safari11,edge16
