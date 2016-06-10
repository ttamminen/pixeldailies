var React = require('react');

module.exports = Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    return (
      <div className={"card" + (tweet.active ? ' active' : '')}>
        <div className="card-image">
          <img src={tweet.mediaUrl} />
          <span className="card-title">{tweet.screenname}</span>
        </div>
        <div className="card-content">
          <div className="chip">
            <a href={"http://www.twitter.com/" + tweet.screenname}>          <img src={tweet.avatar} alt={tweet.screenname} />
            {tweet.screenname}
            </a>
          </div>
          <div>
            {tweet.body}
          </div>
        </div>
        <div className="card-action">
          <a href={tweet.twid}>See original tweet</a>
        </div>
      </div>
    )
  }
});