import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDb from './config/DBConfig.js';

//import all the routes


//to use env file in our project
dotenv.config();

const app = express();
//middleware for recognizing the incoming request object as JSON object
app.use(express.json({limit:"30mb",extended:true}));

//used to parse the data in req.body, used for POST and PUT request
app.use(express.urlencoded({ extended: false }));

//CROSS ORIGIN RESOURCE SHARING
app.use(cors());

const PORT = process.env.PORT || 5000;

//function defined in the config folder 
connectDb();


app.use();

//once the mongoose connection is made
mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDb");
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
}); 





