const sequelize = require('../config/connection');
const seedMovies = require('./movies-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();


  process.exit(0);
};

seedAll();
