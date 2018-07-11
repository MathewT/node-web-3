#! /bin/bash

docker run -p 8585:8585 --net=host  -v "$(pwd)"/public:/usr/src/app/public   -v "$(pwd)"/src:/usr/src/app/src  mthomas/node-web-3