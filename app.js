const express = require("express")

const cors = require('cors');


const server= express();

const port = 4000;
server.use(express.json())
server.use(cors());
const mongoose = require("mongoose")
const router = require("./router")

mongoose.connect("mongodb+srv://vigneshsekar3108:vicKY3108@cluster0.fglxdk0.mongodb.net/zomato?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser: true,})

.then(()=>{
    console.log("database connected")})
.catch(err =>console.log(err))

server.use('/', router)
server.get('/', (req, res) => {
    res.send('Hello World! This is the home page.');
});

server.listen(port,()=>{
    console.log(`You're server On Fire  http://localhost:${port}`);
});