var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  twid: String,
  active: Boolean,
  author: String,
  avatar: String,
  body: String,
  date: Date,
  screenname: String,
  mediaUrl: String,
  hashtags: [String]
});

schema.statics.getTweets = function(page, skip, callback) {
  var tweets = [];
  var start = (page * 10) + (skip * 1);

  Tweet.find({}, 'twid active author avatar body date screenname mediaUrl hashtags',{skip: start, limit: 10})
    .sort({date: 'desc'})
    .exec(function(err,docs) {
      if(!err) {
        tweets = docs;  
        tweets.forEach(function(tweet){
          tweet.active = true;
        });
      }

      callback(tweets);
    });
};

var Tweet = mongoose.model('Tweet', schema);

module.exports = Tweet;