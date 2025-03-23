const express = require('express');
const {PORT} = require('./config/server');
const bodyparser = require('body-parser');

const server = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log('Server is Start');
    })
}

server();