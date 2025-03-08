const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")
require("dotenv").config();


const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Connection with mongodb
mongoose.connect(db_config.DB_URL) 

const db = mongoose.connection

db.on("error", () =>{
    console.log('error while connecting to mongoDB')
})

db.once("open" , () =>{
    console.log("Connected to MongoDB")
})

//stich the route to the server
require("./routes/solution.route")(app);
require("./routes/auth.route")(app);
require("./routes/query.route")(app);

/**
 * Start the server
 */

app.listen(server_config.PORT, ()=>{
    console.log("Server started at PORT no. ", server_config.PORT);
})