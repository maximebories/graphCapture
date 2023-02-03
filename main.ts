// Copyright (C) 2023 Maxime Bories
// 
// This file is part of graphCapture.
// 
// graphCapture is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// graphCapture is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with graphCapture.  If not, see <http://www.gnu.org/licenses/>.

const express = require('express');
const mongodb = require('mongodb');

const app = express();

// Parse request bodies as JSON
app.use(express.json());

// Insert a document into a collection
app.post('/api/items', async (req, res) => {
  try {
    // Connect to the database
    const client = await mongodb.MongoClient.connect('localhost:27017', { useNewUrlParser: true });
    const db = client.db();

    // Insert the document
    const result = await db.collection('items').insertOne(req.body);

    // Return the result
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// starting the server and specify the port number
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});