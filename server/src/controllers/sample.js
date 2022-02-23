import mongoose from "mongoose";
import { sample } from "../models/sample";

import winston from "winston";
import { logConfiguration } from "../config/loggers";



const logger = winston.createLogger(logConfiguration);
//import your models(database schemas here)


const sampleSchema = mongoose.model("sample",sample);
        
const sampleData={
    "name":"john smith",
    "email":"john@gmail.com",
    "password":"hello"
}
export const sampleController = async (req,res) => {
    let result = await sampleSchema(sampleData);

    let record=await result.save()
   
    if(record){
       logger.log("success","success")
       return res
                .status(200)
                .json({success:true,data:result})
    }
    else{
        logger.log("error", "Error while saving user into database" + err);
        return res
          .status(500)
          .json({ success: false, msg: "Internal server error" });
    }
  };
  