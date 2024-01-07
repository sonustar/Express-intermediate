import dotenv from "dotenv"
import connectDb from "./db/database.js";

// const app = express()

// function connectDb(){}
// connectDb()

//  we can improve it by the IIFE function in Js 

dotenv.config({
    path :'./env'
})


connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




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