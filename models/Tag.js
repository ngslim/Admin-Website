const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tag = new Schema({
  name: { type: String, default: 'NAN' },
  category: { type: String, default: 'CA0000' },
});

module.exports = mongoose.model('Tag', Tag);
