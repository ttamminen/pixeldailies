var React = require('react');
var Tweet = require('./Tweet.jsx');

module.exports = Tweets = React.createClass({
  render: function(){
    var content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });

    return (
      <div className="container">{content}</div>
    )
  }
}); 