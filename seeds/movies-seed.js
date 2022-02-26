const { Movies } = require('../models');

const moviesdata = [
    {
      name: 'Spider-Man',
      genre: 'Action',
      rating: '10',
    },
  ];
  
  const seedMovies = () => Movies.bulkCreate(moviesdata);
  
  module.exports = seedMovies;