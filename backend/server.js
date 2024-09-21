const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const dotenv = require("dotenv");
const studentRoute = require('./routes/studentRoute');
const departmentInchargeRoute = require('./routes/departmentInchargeRoute');
const eventCoordinatorRoute = require('./routes/eventCoordinatorRoute');

dotenv.config();

// setting up middlewares 
const corsOptions = {
  origin: 'https://sathyabama-techno-summit-2024.vercel.app/', // replace with your Vercel frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// creating the express app 
const app = express();
const port = process.env.SERVER_PORT || 5555;


app.use(express.json());

// setting up the routes 
app.use('/student' , studentRoute);
app.use('/departmentIncharge' ,departmentInchargeRoute);
app.use('/eventCoordinatorRoute' ,eventCoordinatorRoute);

app.get('/' , async (req , res) => {
    try {
        const [rows, fields] = await db.query('SELECT * FROM dept_incharge;'); // example query
        res.json(rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Database query failed' });
      }
})

// starting the server 
app.listen(port , () => {console.log("Server started at port" , port)});