//import express
const express=require('express');
//import cors
const cors=require('cors')
//import user router
const userRouter = require('./routes/userRoutes');








//import cookieParser 
const cookieParser=require('cookie-parser')
//import morgan
const morgan=require('morgan');



//create aplication
const app=express();





//enable cors request
app.use(cors({
    origin: '*',  // allow all origin
    credentials: true
}));


//use cookie parser
app.use(cookieParser());
//use morgan to log request to console
app.use(morgan('dev'))



//toenable  express application to parse json
app.use(express.json());  //in postman i have sent data in json it will convert as javascript object and give us

//define endpoints 
//defined endponts in routes
//it is middleware "use" keyword
app.use('/api/users',userRouter);






module.exports= app;