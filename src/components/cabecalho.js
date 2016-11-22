import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

module.exports = React.createClass({
  render: function() {
    return (
    	<div className="cabecalho">
	        <Navbar collapseOnSelect fixedTop>
			    <Navbar.Header>
			      	<Navbar.Brand>
			        	<a href="#">MERN-STACK</a>
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
		</div>
    );
  }
});