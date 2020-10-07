//Este archivo contiene las instrucciones necesarias para hacer uso del servidor enbebido Express
//Para deploy en Heroku
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/spa'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/spa/index.html'));
});

app.listen(process.env.PORT || 8080);