const express = require('express');
const {PORT} = require('./config/server');
const bodyparser = require('body-parser');
const Apiroutes = require('./router/index');

const server = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api',Apiroutes);


    app.listen(PORT,()=>{
        console.log('Server is Start');
    })
}

server();