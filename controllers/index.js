const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');
const loginRoutes = require("./login-routes");
=======
const movieRoutes = require('./movie-routes.js');
>>>>>>> b21b2d1735ecf2aaa0181f777d89670e62bf28ab

router.use('/', movieRoutes);
router.use('/api', apiRoutes);
router.use("/login", loginRoutes);

module.exports = router;
