import { MongoClient } from 'mongodb';
import { mongoose } from 'mongoose';

import {CredentialManager} from '../../cred/credentials.js'

const credentials = new CredentialManager();

export class Database{
    client = null
    constructor(){
        this.client = new MongoClient(credentials.getMongoDBUrl());
    }

    async connect(){ // connect to database on atlas
        try{
            await mongoose.connect(credentials.getMongoDBUrl());
            console.log("Connection to mongoose is done");
        }catch(error){
            console.log(error)
            console.warn("Failed to establish the connection with mongoose");
        }
    }

    async dummyConnectionCreationAndDataUpdation() { // implementation for testing 
        try {
            console.log("Started Searching Data in MongoDB....");
            const database = this.client.db('sample_mflix');
            const movies = database.collection('movies');

            // Query for a movie that has the title 'Back to the Future'
            const query = { title: 'Back to the Future' };
            const movie = await movies.findOne(query);

            console.log(movie);
        } finally {
            // Ensures that the client will close when you finish/error
            await this.client.close();
        } 
    }
}