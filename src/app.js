import React from 'react';
import { render } from 'react-dom'

var AppContainer = React.createClass({
  render: function() {
    return (
      <div>
        Hello Worldde!
      </div>
    );
  }
});

render(
  <AppContainer />,
  document.getElementById('container')
);