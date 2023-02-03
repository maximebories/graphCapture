#!/bin/bash

# Copyright (C) 2023 Maxime Bories
#
# This file is part of graphCapture.
#
# graphCapture is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# graphCapture is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with graphCapture.  If not, see <http://www.gnu.org/licenses/>.

# Verify that MongoDB is running and create the 'graphDB' database and 'nodes' collection
mongosh --eval "use graphDB"
mongosh --eval "db.createCollection('nodes')"

# Install MongoDB driver and Babel
npm install browserify mongodb snappy @mongodb-js/zstd bson-ext aws4 kerberos babel-cli babel-preset-env

# Create the mongodb.js file
echo "const MongoDB = require('mongodb');" >mongodb.js

# Transpile the MongoDB driver and place it in the 'lib' directory
./node_modules/.bin/babel --presets env --extensions ".js" mongodb.js -d lib

# Bundle the code and dependencies using Browserify
./node_modules/.bin/browserify -r ./lib/mongodb >lib/bundle.js

# Move the 'lib' directory to the location specified in the documentation
mv lib ~/Library/Application\ Support/com.proxyman.NSProxy/addons/libs/
