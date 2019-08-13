#!/usr/bin/env bash
cd `dirname $0`
cd ..
cd ..
basepath=$(pwd)
node bin/index.js -c ${basepath}/bin/prod/config.js -o ${basepath}/dist/
