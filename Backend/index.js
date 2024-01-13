import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDb from './config/DBConfig.js';

//import all the routes
import postRouter from './routes/posts.js'

//to use env file in our project
dotenv.config();

//the port will be in the ENV file once we deploy the project
const PORT = process.env.PORT;


//create the app
const app = express();

//function defined in the config folder 
connectDb();

//CROSS ORIGIN RESOURCE SHARING
app.use(cors());


//middleware for recognizing the incoming request object as JSON object
app.use(express.json({limit:"30mb",extended:true}));
//used to parse the data in req.body, used for POST and PUT request
app.use(express.urlencoded({ extended: false }));

//use the route handlers
app.use('/posts',postRouter);



//once the mongoose connection is made
mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDb");
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
}); 





