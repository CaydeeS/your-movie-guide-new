const router = require("../../controllers/api/user-routes");


router.get('/watchlist', function (req, res, next) {
    res.render('watchlist', { watchlist: express });

});