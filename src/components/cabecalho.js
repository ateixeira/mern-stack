import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

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
				    	<LinkContainer to="/blog">
					    	<NavItem eventKey={1} href="#">Blog</NavItem>
					    </LinkContainer>
				    	<LinkContainer to="/dashboard">
					    	<NavItem eventKey={2} href="#">Dashboard</NavItem>
					    </LinkContainer>
				    	<LinkContainer to="/cv">
					    	<NavItem eventKey={3} href="#">CV</NavItem>
					    </LinkContainer>
				    </Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
    );
  }
});