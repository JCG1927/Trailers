const mongoose = require('mongoose');
const { db } = require('../models/movies');

const hostname = '127.0.0.1';

const port = '27017';

const database = 'Trailers';

const url = `mongodb://${hostname}:${port}/${database}`;




mongoose.connect(url,{useNewUrlParser:true});

db.once('open',()=>{
    console.log("Conectado");
})

db.on('error',(error)=>{
    console.log(error)
})



