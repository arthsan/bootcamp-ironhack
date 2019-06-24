const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  course: { type: String, enum: ['WebDev', 'UX/UI', 'Data Analytics']},
  campus: { type: String, enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo'] },
  image: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;