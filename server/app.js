//Import the module
import express from 'express';
import data from './product_data';
import dotevn from 'dotenv';
import config from './config';
import productRoute from './routes/productRoute';
import product from './models/products';

dotevn.config();

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


//Set up default mongoose connection or DB config
mongoose.connect( config.MONGODB_URL, { useNewUrlParser: true })
.then((db) => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use( '/api', productRoute);


// process.env.PORT automatically takes the server assigned port
// 5000 is standard port for Node Js
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});