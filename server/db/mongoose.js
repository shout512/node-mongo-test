var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://shout512:!Inter79@ds115131.mlab.com:15131/mppm');

module.exports = {mongoose};
