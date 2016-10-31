var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
      </div>
    );
  }
});

ReactDOM.render(
  <AppContainer />,
  document.getElementById('container')
);