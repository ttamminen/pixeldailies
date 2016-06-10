var React = require('react');

module.exports = Loader = React.createClass({
  render: function(){
    return (
      <div className={"preloader-wrapper big " + (this.props.paging ? "active" : "")}>
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    )
  }
});