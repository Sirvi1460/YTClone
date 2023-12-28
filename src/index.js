import dotenv from "dotenv";
import connectDB from "./db/dbconnection.db.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
  try {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is Running at Port ${process.env.PORT}`);
    })
  } catch (error) {
    app.listen("error", (error) => {
        console.log("Error :", error);
        throw error
    })
  }  
})
.catch((error) => {
    console.log("Mongo DB Connection Failed !!", error)
})


// here in .then() : Try-Catch is applied by me so try default code as shown in video while Serious error.
