const express = require('express')
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
//directory path to layouts
app.engine('handlebars', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')

}));

app.set('view engine', 'handlebars');

//routing
app.get('/watchlist', (req, res) => {
    res.render('watchlist', { title: 'Watch List' });
});

