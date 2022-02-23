//import dependencies
import express from "express";
import bodyParser from "body-parser";
import winston from "winston";
require("dotenv").config();
import mongoose from "mongoose";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import sampleRoutes from "./src/routes/sample";

const app = express();

// Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "karma Rewards",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

// config objects
const swaggerDocs = swaggerJsDoc(swaggerOptions);

import { logConfiguration } from "./src/config/loggers";
import templateRoutes from "./src/routes/template-routes";
const logger = winston.createLogger(logConfiguration);

// using all middle tiers

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//connect your routes
sampleRoutes(app)
templateRoutes(app)

//database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  logger.log("info", "server started at " + PORT);
});
