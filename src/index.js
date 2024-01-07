// import dotenv from "dotenv"
const dotenv = require('dotenv').config();
// import connectDb from "./db/database.js";
const connectDb = require('./db/database.js')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// function connectDb(){}
// connectDb()

//  we can improve it by the IIFE function in Js 

// dotenv.config({
//     path :'./env'
// })


// connectDb()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })


const uri = 'mongodb+srv://sonustar:sonu@cluster01.txijc0h.mongodb.net/';


mongoose.connect(uri)
.then(function(db){
    console.log('db connected')
})
.catch(function(err){
    console.log(err)
});

mongoose.connection.once('open', function () {
    console.log('Connection to MongoDB established.');
});


// //Approach 1 :

// ( async  ()=>{
    
//     try {

// // MONGODB_URL : we get this from .env

//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log(error);
//         throw error
//     })
    
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening at ${process.env.PORT}`);
//     })

//     } catch (error) {
     
//         // console.log() or console.error()
//         console.log("Error : ",error)
//     }

// })()

