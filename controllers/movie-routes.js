const router = require('express').Router();
<<<<<<< HEAD:controllers/home-routes.js
// const { index } = require('../models');
=======
const { Movies } = require('../models');
>>>>>>> b21b2d1735ecf2aaa0181f777d89670e62bf28ab:controllers/movie-routes.js
// Import the custom middleware
// const withAuth = require('../utils/auth');

<<<<<<< HEAD:controllers/home-routes.js


router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
=======
// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const moviesdata = await Movies.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const Movies = dbmoviedata.map((movies) =>
      movies.get({ plain: true })
    );

    res.render('homepage', {
      mov,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/movie/:id', withAuth, async (req, res) => {
  try {
    const moviesdata = await Movies.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });
>>>>>>> b21b2d1735ecf2aaa0181f777d89670e62bf28ab:controllers/movie-routes.js

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
