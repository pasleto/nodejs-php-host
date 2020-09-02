var express = require('express');
var app = express();
var phpExpress = require('php-express')({binPath: 'php'});

// ---------------- //
   var PORT = 3000; 
// ---------------- //

// set view engine to php-express
app.set('views', './views');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// let express know there's a public directory.
app.use(express.static('./public'));

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

// render default index page
app.get('/', function(req, res) {
    // res.send is changed to result.render in order to load the correct view.
    res.render('index');
});

// server start
app.listen(PORT, function () {
    console.log(`--------------------------------------`);
    console.log(`Server is running on http://localhost:` + PORT + `/`);
    console.log(`--------------------------------------`);
});
