/**
 * Module dependencies.
 */
const http = require('http');
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const mongo = require('mongodb');

/**
 * local dependencies.
 */

var blockchain = require('./core/blockchain');

/**
 * gpio sensors
 */

var localSensors = require('./core/sensors');

/**
 * Create Express and socket server.
 */
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

/**
 * Express configuration.
*/

  app.engine('handlebars', hbs({ defaultLayout: 'layout'}));
	//app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'handlebars');
	app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));


/*
 * Primary app routes.
 */

 server.listen(80);

 app.get('/', function(req, res){
     res.render('home');
 });

/**
 * Socket manager.
 */

 io.sockets.on('connection', function (socket) {

 setInterval(function(){
 	//get temp and humidity
 	 localSensors.sensor.read(11,17, function(err, temperature, humidity) {
 		if (!err) {
 			 socket.emit('THupdate', { 'temp' : temperature, 'humidity' : humidity});
 				//console.log('temp: ' + temperature.toFixed(1) + 'C, ' + 'humidity: ' + humidity.toFixed(1) + $     }
 	 }
  });

  //emit signal if watermon detects being off

 		level = localSensors.h2oMon1.digitalRead();
 		if (level != 0) {
 				socket.emit("h2oMoff");
 				} else {
 				socket.emit("h2oMon");
 				};
 //check light
 	 lLevel = localSensors.lightMon.digitalRead();
 		 if (lLevel != 1) {
 				socket.emit("lightoff");
 				} else {
 				socket.emit("lighton");
 				};

 },5000);
 });

/**
 * Start Express server.
 */

app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode.', app.get('port'), app.get('env'));
});


module.exports = app;
