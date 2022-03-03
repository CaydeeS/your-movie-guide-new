const express = require('express')
const app = express()
const router = require("../../controllers/api/user-routes");


router.get('/watchlist', function (req, res, next) {
    res.render('watchlist', function (err, html) {
        res.send(html)

    })
});