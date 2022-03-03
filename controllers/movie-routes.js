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

// Use the custom middleware before allowing the user to access the painting

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/watchlist', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('watchlist');
});



module.exports = router;
