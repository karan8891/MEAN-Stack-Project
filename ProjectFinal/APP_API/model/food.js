const mongoose = require( 'mongoose' );
const foodSchema = new mongoose.Schema({
name: {type: String, required: true,min:3},
type: {type: String, required: true},
description: {type: String, required: true},
price: {type: String, required: true}
});
module.exports = mongoose.model('food',foodSchema)
