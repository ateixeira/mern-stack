import React from 'react';
import { render } from 'react-dom'

var AppContainer = React.createClass({
  render: function() {
    return (
      <div>
        Hello Worldd
      </div>
    );
  }
});

render(
  <AppContainer />,
  document.getElementById('container')
);