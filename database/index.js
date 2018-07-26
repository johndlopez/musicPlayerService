const mongoose = require('mongoose');
const data = require('../sampleData.js');

const connection = mongoose.connect('mongodb://localhost/musicPlayer', { useMongoClient: true });

console.log('GRRRREEAAAAT SUCCESSSSS!!!!!');

const songSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number, unique: true, required: true, dropDups: true
  },
  title: String,
  artist: String,
  album: String,
  genre: String
});

const Song = mongoose.model('Song', songSchema);

const save = (err, inputSong) => {
  if (err) {
    console.log(err);
  } else {
    const song = new Song(inputSong);
    song.save(() => {
      console.log('success!', inputSong);
    });
  }
};

module.exports.save = save;
