const mongoose = require('mongoose');

const { Schema } = mongoose;

const thingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Thing = mongoose.model('Thing', thingSchema);
module.exports = Thing;
