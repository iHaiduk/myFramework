var app, applicationDirectory, config, express, http, i, io, mongoose, page, path, pub, routes;

applicationDirectory = __dirname + '/application/';

express = require('express');

app = express();

path = require('path');

config = require(applicationDirectory + 'config')();

http = require('http').Server(app);

io = require('socket.io')(http);

mongoose = require('mongoose');


/* Path to express public directory */

pub = __dirname + '/public';

require(applicationDirectory + 'controllers')(mongoose);

routes = require(applicationDirectory + 'routes')();


/*mongoose = require('mongoose');
 dbConfig = require( applicationDirectory + 'db/config.json');

 mongoose.connect(dbConfig.url, dbConfig.opts, function (error) {
 if (error) {
 console.log(error);
 }
 });

 var Schema = mongoose.Schema;

 var kittySchema = new Schema({
 name: String
 });
 var Kitten = mongoose.model('kitten', kittySchema);

 var silence = new Kitten({ name: 'Silence' });
 silence.save(function (err, fluffy) {
 if (err) return console.error(err);
 console.log(fluffy)
 });

 return;
 */

app.set('views', 'views');

app.set('view engine', 'ejs');

app.use(express['static'](pub));

mongoose.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/test', function(err, db) {
  if (err != null) {
    return console.log(err);
  }
  console.log('Successfully connected to mongodb://' + config.mongo.host + ':' + config.mongo.port);
});


/* Routing */

for (i in routes) {
  page = routes[i];
  app[page.type](page.link, page.control);
}


/* Socket */

io.on('connection', function(socket) {});

http.listen(config.port, function() {
  console.log('Server started. Link: http(s)://' + config.mongo.host + ':' + config.port);
});
