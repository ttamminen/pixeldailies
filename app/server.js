var express = require('express'),
  exphbs = require('express-handlebars'),
  socketio = require('socket.io'),
  http = require('http'),
  mongoose = require('mongoose'),
  twitterClient = require('twitter'),
  routes = require('./routes'),
  config = require('../config'),
  twitterHandler = require('./twitter');

var app = express();
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({ defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'handlebars');
app.disable('etag');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pixeldailies');

var twitter = new twitterClient(config.twitter);

app.get('/', routes.index);
app.get('/page/:page/:skip', routes.page);
app.use('/', express.static('./public/'));

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var comm = socketio.listen(server);

twitter.stream('statuses/filter', { track: '@Pixel_Dailies #pixel_dailies'}, function(stream){
  twitterHandler(stream, comm);
});
