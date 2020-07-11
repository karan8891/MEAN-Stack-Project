const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://karan:karan123@cluster0-h1kxd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbURI,{dbName:'foodDB',useNewUrlParser: true });
mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
mongoose.connection.close( () => {
console.log(`Mongoose disconnected through ${msg}`);
callback();
});
};
process.once('SIGUSR2', () => {
gracefulShutdown('nodemon restart', () => {
process.kill(process.pid, 'SIGUSR2');
});
 });

require('./food');