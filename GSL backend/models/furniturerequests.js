const mongoose = require('mongoose');
const FurnitureRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
  status: { type: String, default: 'pending' }
});
module.exports = mongoose.model('FurnitureRequest', FurnitureRequestSchema);
