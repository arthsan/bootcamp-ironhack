
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  lastName: String,
  team: String,
  photo: String
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
