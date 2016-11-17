import React from 'react';
import { render } from 'react-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

var AppContainer = React.createClass({
  render: function() {
        return (
	        <Navbar collapseOnSelect fixedTop>
			    <Navbar.Header>
			      	<Navbar.Brand>
			        	<a href="#">ANDRÉ TEIXEIRA</a>
			     	</Navbar.Brand>
			     	<Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
				    <Nav>
					    <NavItem eventKey={1} href="#">Blog</NavItem>
					    <NavItem eventKey={2} href="#">Dashboard</NavItem>
					    <NavItem eventKey={3} href="#">CV</NavItem>
				    </Nav>
				</Navbar.Collapse>
			</Navbar>
        );
  }
});

render(
  <AppContainer />,
  document.getElementById('container')
);