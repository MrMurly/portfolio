import { projectRoute } from "./routes/projects"
import * as dotenv from "dotenv";

// app.js
const express = require('express')
const path = require('path');
const { connectToDatabase } = require('./db/services.ts');

const app = express();

//Import all routes from ./routes

function makeServer(callback?: Function) {   
    dotenv.config();

    app.use(express.json())
    // Add any routes here after middleware
    app.use("/project", projectRoute);

    let server = app.listen(process.env.PORT!, () => {
        let p = server.address().port;
        console.log(`Server started: http://localhost:${p}`);

        if(callback){
            callback();
        }
    })

    return server;
}

connectToDatabase(() => {
    // Make a server after connection has been established.
    makeServer();
});

module.exports = {
    makeServer
}