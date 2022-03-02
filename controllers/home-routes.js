const router = require('express').Router();
// const { index } = require('../models');
// Import the custom middleware
// const withAuth = require('../utils/auth');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

router.get('/watchlist', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('watchlist');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;
