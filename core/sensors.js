var Gpio = require('pigpio').Gpio,
  h2oMon1= new Gpio(4, {
	  mode: Gpio.INPUT,
	  pullUpDown: Gpio.PUD_DOWN,
	  edge: Gpio.EITHER_EDGE
	}), lightMon= new Gpio(27, {
          mode: Gpio.INPUT,
          pullUpDown: Gpio.PUD_DOWN,
          edge: Gpio.EITHER_EDGE
	});

var sensor = require('node-dht-sensor');

console.log('Sensors loaded');

exports.h2oMon1 = h2oMon1;
exports.lightMon = lightMon;
exports.sensor = sensor;

//module.exports = Gpio, h2oMon1, lightMon, sensor;
