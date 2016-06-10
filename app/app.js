var React = require('react');
var ReactDOM = require('react-dom');
var PixelDailiesApp = require('./components/PixelDailiesApp.jsx');

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

ReactDOM.render(
  <PixelDailiesApp tweets={initialState}/>,
  document.getElementById('pixeldailies')
);