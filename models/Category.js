const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  name: { type: String, default: 'NAN' },
});

module.exports = mongoose.model('Categories', Category);
