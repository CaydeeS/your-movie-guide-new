const router = require('express').Router();
const { Genre, Movies } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all movies for homepage
router.get('/', async (req, res) => {
  try {
    const dbMoviesData = await Movies.findAll({
      include: [
        {
          model: Movies,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const Genre = dbGenreData.map((genre) =>
      genre.get({ plain: true })
    );

    res.render('homepage', {
      genre,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/watch/:id', withAuth, async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [
        {
          model: Movies,
          attributes: [
            'type',
            'name',
            'genre',
            'rating',
            'filename',
            'description',
          ],
        },
      ],
    });

    const genre = dbGenreData.get({ plain: true });
    res.render('watch', { genre, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use the custom middleware before allowing the user to access the painting
router.get('/current/:id', withAuth, async (req, res) => {
  try {
    const dbMoviesData = await Movies.findByPk(req.params.id);

    const movies = dbMoviesData.get({ plain: true });

    res.render('current', { movies, loggedIn: req.session.loggedIn });
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

module.exports = router;
