#!/usr/bin/env bash
cd `dirname $0`
cd ..
cd ..
basepath=$(pwd)
node bin/index.js -c ${basepath}/bin/dev/config.js -o ${basepath}/dist/
