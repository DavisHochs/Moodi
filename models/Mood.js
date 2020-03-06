const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MoodSchema = new Schema({
  username: { type: String, required: false }, //time will be either morning or afternoon?
  mood: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: Date, required: false },
  morning:  {type: Boolean, require: false}
}, {
  timestamps: true,
});

const Mood = mongoose.model('mood', MoodSchema);

module.exports = mood;