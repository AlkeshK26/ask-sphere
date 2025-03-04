const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")

const app = express();


/**
 * Start the server
 */

app.listen(server_config.PORT, ()=>{
    console.log("Server started at PORT no. ", server_config.PORT);
})

// Connection with mongodb
mongoose.connect(db_config.DB_URL) 

const db = mongoose.connection

db.on("error", () =>{
    console.log('error while connecting to mongoDB')
})

db.once("open" , () =>{
    console.log("Connected to MongoDB")
})