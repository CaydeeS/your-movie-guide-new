const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Movies = require('./Movies');
const Genre = require('./Genre');

Gallery.hasMany(Painting, {
  foreignKey: 'movies_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'movies_id',
});

Movies.hasMany(Genre, {
  foreignKey: 'movies_id',
});

Genre.belongsTo(Movies, {
  foreignKey: 'movies_id',
});



module.exports = { User, Movies };
