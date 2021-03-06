var app, applicationDirectory, config, express, path, pub;

applicationDirectory = __dirname + '/application/';

express = require('express');

app = express();

path = require('path');

global["http"] = require('http').Server(app);

config = require(applicationDirectory + 'config');


/* Path to express public directory */

pub = __dirname + '/' + config.publicFolder;

app.set('views', config.dirViews);

app.set('view engine', config.viewEngine);

app.use(express['static'](pub));


/* Adapter */

require(applicationDirectory + 'adapter')(config);

require(applicationDirectory + 'class/Controller').prototype.init();


/* Socket */

if ((config != null) && config.socket) {
  global["socketIo"] = null;
}


/* Routing */

require(applicationDirectory + 'routes').prototype.init(app);


/* Start server */

http.listen(config.port, function() {
  console.log('Server started. Link: http(s)://' + config.url + ':' + config.port);
});
