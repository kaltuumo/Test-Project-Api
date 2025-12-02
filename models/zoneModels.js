const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  zone: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Zone', zoneSchema);