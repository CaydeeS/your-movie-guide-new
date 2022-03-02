const User = require('./User');
const Movies = require('./Movies');
const Genre = require('./Genre');



Movies.hasMany(Genre, {
  foreignKey: 'movies_id',
});

Genre.belongsTo(Movies, {
  foreignKey: 'movies_id',
});



module.exports = { User, Movies };
