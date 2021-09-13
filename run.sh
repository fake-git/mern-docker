#!/bin/bash

ROOTDIR="$( cd "$( dirname "${0}" )" && pwd )"

# Run sever
cd ${ROOTDIR}/server/
npm start &


# Run client
cd ${ROOTDIR}/client/
npm start 