import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

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