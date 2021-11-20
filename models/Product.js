const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: String, default: 'PR0000' },
  name: { type: String, default: 'NAN' },
  tag: { type: Array, default: 'None' },
  poster: {
    type: String,
    default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTdkiS1we0b08bO2lLpga3qg48N-xFSvrLl_ay4KrPE2UJTmsnOF4x9ThTBPTinwIGeM&usqp=CAU',
  },
  price: { type: Number, default: 0.0 },
  discount: { type: Number, default: 0.0 },
  dev: { type: String, default: 'NAN' },
  publisher: { type: String, default: 'NAN' },
  description: { type: String, default: 'NAN' },
});

module.exports = mongoose.model('Game', Product);
