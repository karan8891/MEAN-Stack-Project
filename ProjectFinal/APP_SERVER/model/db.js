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


require('./food');