const mongoose = require("mongoose");
import {DB_NAME} from "./constants"

import express from "express";


const app = express()

// function connectDb(){}
// connectDb()

//  we can improve it by the IIFE function in Js 









/*
//Approach 1 :

( async  ()=>{
    
    try {

// MONGODB_URL : we get this from .env

    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log(error);
        throw error
    })
    
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening at ${process.env.PORT}`);
    })

    } catch (error) {
     
        // console.log() or console.error()
        console.log("Error : ",error)
    }

})()

*/