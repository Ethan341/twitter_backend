import express from 'express'
import { Database } from '../src/config/database.js'
import router from './routes/index.js';
import bodyParser from 'body-parser'
//bodyParser = require('body-parser');
import { test } from './test.js';

const app = express();

// TODO move this middleware code to seperate configuration file
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use('./',router);

const database = new Database();
database.connect();

app.listen(3000,()=>{
    console.log('listening on port 3000 Triggered');
}) 
test();


 

