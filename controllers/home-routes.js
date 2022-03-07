const router = require('express').Router();
const { Movies, Genre } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

router.get('/', async (req, res) => {
  try {
    const dbMoviesData = await Movies.findAll({
      include: [
        {
          model: Genre,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const movies = dbMoviesData.map((movie) =>
      movie.get({ plain: true })
    );

    res.render('homepage', {
      movies,
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
    const dbMoviesData = await Movies.findByPk(req.params.id, {
      include: [
        {
          model: Genre,
          attributes: [
            'id',
            'title',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const movie = dbMoviesData.get({ plain: true });
    res.render('movie', { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/genre/:id', withAuth, async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id);

    const genre = dbGenreData.get({ plain: true });

    res.render('genre', { genre, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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
