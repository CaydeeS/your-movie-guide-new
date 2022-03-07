const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const watchlistRoutes = require("./watchlist-routes.js")


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/watchlist', watchlistRoutes);

module.exports = router;
