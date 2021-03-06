const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
require("./config/database").connect();
const userRoute = require('./routes/userRoute');
const auth = require('./middleware/auth');
const { API_PORT } = process.env;
const port = 3000 || API_PORT;
const app = express();

app.use(express.json());
app.use(userRoute);

//all method on http
app.all('/',auth,(req,res) =>{
    res.status(200).send('U can do it (login-with-Auth)');
})
console.log(port);
app.listen(port, () => console.log(`Server Running in port ${port} `));