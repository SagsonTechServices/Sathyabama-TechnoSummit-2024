const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const dotenv = require("dotenv");
const studentRoute = require('./routes/studentRoute');

dotenv.config();

// creating the express app 
const app = express();
const port = process.env.port || 5555;

// setting up middlewares 
app.use(express.json());
app.use(cors());

// setting up the routes 
app.use('/student' , studentRoute);

// starting the server 
app.listen(port , () => {console.log("Server started at port" , port)});