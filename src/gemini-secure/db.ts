import mongoose from "mongoose";
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(()=>{
    console.log(" mongodb connection successfully")
  })
  .catch(()=>{
    console.log("error in mongodb connection")
  });
