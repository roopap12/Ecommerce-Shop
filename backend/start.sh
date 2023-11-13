#!/bin/bash

# Wait for MongoDB to be ready
dockerize -wait tcp://mongodb:27017 -timeout 1m

# Start your application
node server.js