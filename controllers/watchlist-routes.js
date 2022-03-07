var express = require('express');
var router = express.Router();

router.get("/watchlist", async (req, res) => {
    res.render("watchlist", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;
