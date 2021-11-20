const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  id: { type: String, default: 'CA0000' },
  name: { type: String, default: 'NAN' },
});

module.exports = mongoose.model('Categories', Category);
