import express from 'express'
import { Database } from '../src/config/database.js'

import { test } from './test.js';
const app = express();
const database = new Database();
database.connect();

app.listen(3000,()=>{
    console.log('listening on port 3000 Triggered');
}) 
test();


 

