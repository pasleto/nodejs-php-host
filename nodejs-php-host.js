var express = require('express');
var app = express();
var phpExpress = require('php-express')({binPath: 'php'});

// set view engine to php-express
app.set('views', './views');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

app.listen(80, function () {
    console.log(`--------------------------------------`);
    console.log(`Server is running on http://localhost/`);
    console.log(`--------------------------------------`);
});