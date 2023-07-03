import express from 'express'
import { Database } from '../src/config/database.js'
import Tweet from './models/tweet.js';

const app = express();
const database = new Database();
database.connect();

app.listen(3000,()=>{
    console.log('listening on port 3000 Triggered');
}) 
Tweet.create({
  content : "Hello There This is first tweet",
  likes : 3,
  noOfRetweets : 2,
  Comment : "Hii There"
}).then((resoonse)=>{
  console.log("Received response is",resoonse)
})
 

