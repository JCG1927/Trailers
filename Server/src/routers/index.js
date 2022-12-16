const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/movies'); 
const Admin = require('../models/admin')

const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/TrailersDB', { useNewUrlParser: true });

// Parse incoming request bodies as JSON
app.use(express.json());

// Define a route for creating a new movie
app.post('/movies', (req, res) => {
  const movie = new Movie(req.body);
  movie.save((err, movie) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(movie);
  });
});

// Define a route for retrieving all movies
app.get('/movies', (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) return res.status(500).send(err);
    return res.send(movies);
  });
});

// Define a route for retrieving a single movie by ID
app.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) return res.status(500).send(err);
    if (!movie) return res.status(404).send('Movie not found');
    return res.send(movie);
  });
});

// Define a route for updating a movie
app.put('/movies/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, movie) => {
    if (err) return res.status(500).send(err);
    if (!movie) return res.status(404).send('Movie not found');
    return res.send(movie);
  });
});

// Define a route for deleting a movie
app.delete('/movies/:id', (req, res) => {
  Movie.findByIdAndDelete(req.params.id, (err, movie) => {
    if (err) return res.status(500).send(err);
    if (!movie) return res.status(404).send('Movie not found');
    return res.send(movie);
  });
});

// Define a route for creating a new admin
app.post('/admins', (req, res) => {
  const admin = new Admin(req.body);
  admin.save((err, admin) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(admin);
  });
});

// Define a route for retrieving all admins
app.get('/admins', (req, res) => {
  Admin.find({}, (err, admins) => {
    if (err) return res.status(500).send(err);
    return res.send(admins);
    });
    });
    
    // Define a route for retrieving a single admin by ID
    app.get('/admins/:id', (req, res) => {
    Admin.findById(req.params.id, (err, admin) => {
    if (err) return res.status(500).send(err);
    if (!admin) return res.status(404).send('Admin not found');
    return res.send(admin);
    });
    });
    
    // Define a route for updating an admin
    app.put('/admins/:id', (req, res) => {
    Admin.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, admin) => {
    if (err) return res.status(500).send(err);
    if (!admin) return res.status(404).send('Admin not found');
    return res.send(admin);
    });
    });
    
    // Define a route for deleting an admin
    app.delete('/admins/:id', (req, res) => {
    Admin.findByIdAndDelete(req.params.id, (err, admin) => {
    if (err) return res.status(500).send(err);
    if (!admin) return res.status(404).send('Admin not found');
    return res.send(admin);
    });
    });
    
    // Start the server
    app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    });