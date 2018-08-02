const mongoose = require('mongoose');

const bookmarksSchema = new mongoose.Schema({
  title: {
    "type": "string",
    "required": true
  },
  url: {
    "type": "string",
    "required": true}
});

const Bookmarks = mongoose.model('Bookmark', bookmarksSchema);

module.exports= Bookmarks;
