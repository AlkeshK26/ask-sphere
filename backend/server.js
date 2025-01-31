const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server_config = require("./configs/server.config")

const app = express();


/**
 * Start the server
 */

app.listen(server_config.PORT, ()=>{
    console.log("Server started at PORT no. ", server_config.PORT);
})