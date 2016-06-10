require('node-jsx').install({extension: '.jsx'});
var React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  TweetsApp = React.createFactory(require('./components/TweetsApp')),
  Tweet = require('./models/Tweet');

module.exports = {

  index: function(req, res) {
    Tweet.getTweets(0,0, function(tweets, pages) {
      var markup = ReactDOMServer.renderToString(
        TweetsApp({
          tweets: tweets
        })
      );

      res.render('home', {
        markup: markup,
        state: JSON.stringify(tweets) 
      });

    });
  },

  page: function(req, res) {
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
      res.send(tweets);
    });
  }
}
