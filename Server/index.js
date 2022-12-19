const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movies'); 
const Admin = require('./models/admin');
const { db } = require('./models/movies');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const moviesRouters = require('./routes/movies.router')
const adminRouters = require('./routes/admin.router')
const port = 3001
const cors = require('cors');



//conectando db

MongoClient.connect('mongodb://localhost:27017/MoviesDB', { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Connected to the database');
  });
  


const app = express();

app.use(cors());


app.use(adminRouters)
app.use(moviesRouters)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    bodyParser.json({
        limit:'20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)

mongoose.connect('mongodb://localhost:27017/MoviesDB')





// app.get('/movies', (req, res) => {
//     Movie.find((err, movies) => {
//       if (err) return res.status(500).send(err);
//       return res.send(movies);
//     });
//   });

app.get('/movies/search', async (req, res) => {
  const movie = await Movie.find({ title: req.query.title });
  res.send(movie);
});


app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id, (err, movie) => {
    if (err) return res.status(500).send(err);
    if (!movie) return res.status(404).send('Movie not found');
    res.send(movie);
  });
});



  // Crear un nuevo trailer
  app.post('/movies', async (req, res) => {
    const movie = new Movie({
      title: req.body.title,
      date: req.body.date,
      director: req.body.director,
      actors: req.body.actors,
      description: req.body.description,
      review: req.body.review,
      imagesUrl: req.body.imagesUrl,
      trailersUrl: req.body.trailersUrl
    });
    try {
      const newMovie = await movie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  
  // Actualizar un trailer activo
  app.put('/movies/:id', (req, res) => {

    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, movie) => {
      if (err) return res.status(500).send(err);
      return res.send(movie);
    });
  });
  
  // Eliminar un trailer
  app.delete('/movies/delete/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (err, movie) => {
      if (err) return res.status(500).send(err);
      return res.send(movie);
    });
  });
  


  //Ver Admins
  app.get('/admins', (req,res)=>{
    Admin.find((err,admins)=>{
        if (err)return res.status(500).send(err);
        return res.send(admins)
    })
  })

  

  //Agregar Admins
  app.post('/admins', (req, res) => {
    const newAdmin = new Admin(req.body);
    newAdmin.save((err, admin) => {
      if (err) return res.status(500).send(err);
      return res.send(admin);
    });
  });
  
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
