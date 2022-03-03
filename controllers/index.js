const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const loginRoutes = require("./login-routes");
const watchlistRoutes = require("./watchlist-routes.js")


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use("/login", loginRoutes);
router.use('/watchlist', watchlistRoutes);

module.exports = router;
