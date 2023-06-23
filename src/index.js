import express from 'express'
import { MongoClient } from 'mongodb'

import {CredentialManager} from '../cred/credentials.js'


const app = express();
const credentials = new CredentialManager();

app.listen(3000,()=>{
    console.log('listening on port 3000 Triggered');
}) 


const client = new MongoClient(credentials.getMongoDBUrl());

async function run() {
  try {
    console.log("Started Searching Data in MongoDB....");
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);