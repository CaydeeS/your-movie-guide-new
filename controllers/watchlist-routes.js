const router = require("express").Router();

//render handlebars view on page load
router.get("/watchlist", async (req, res) => {
    res.render("watchlist", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;


// const express = require('express')
// const app = express();
// const expbs = require('express-handlebars');
// const path = require('path');
// //directory path to layouots
// app.engine('handlebars', expbs({
//     defaultLayout: 'main',
//     layoutsDir: path.join(__dirname, 'views/layouts')

// }));

// app.set('view engine', 'handlebars');

// //routing
// app.get('/', (req, res) => {
//     res.render('watchlist', { title: 'Watch List' });
// });