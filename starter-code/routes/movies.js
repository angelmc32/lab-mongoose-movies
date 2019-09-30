const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {

  Movie.find()
  .then( movies => {
    res.render('movies/index', { movies });
  })
  .catch( error => {
    console.log(error);
    next;
  });

});

module.exports = router;