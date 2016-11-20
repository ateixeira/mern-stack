import React from 'react';
import { render } from 'react-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

require('./styles/style.scss');

var Cabecalho = require('./components/cabecalho')
var Conteudo = require('./components/conteudo')

var AppContainer = React.createClass({
    render: function() {
        return (
            <div>
                <Cabecalho />
                <Conteudo />
            </div>
        );
    }
});

render(
    <AppContainer />, document.getElementById('container')
);