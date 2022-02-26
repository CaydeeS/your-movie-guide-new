const sequelize = require('../config/connection');
const seedMovies = require('./movies-seed');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();

  // await seedPaintings();

  process.exit(0);
};

seedAll();
