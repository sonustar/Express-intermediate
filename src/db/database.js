//tumko algo laaga na sikho 

// connect mongoose 
import mongoose  from "mongoose";

//Database name 
import { DB_NAME } from "../constants.js";

const connectDb = (async ()=>{
    
    try {

    const Instance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

    console.log(`MONGODB is connected ${Instance.connection.host}`);
        
    } catch (error) {
        console.log("DataBase Failed ", error)
        process.exit(1)
    }

})

export default connectDb 