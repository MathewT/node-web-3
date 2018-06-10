#!/bin/bash

cd src/
aws --profile=long-div s3 cp --recursive .  s3://bitcru/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
