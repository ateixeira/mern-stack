import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
 
module.exports = React.createClass({

    // RENDER
    render: function() {
        
        return (
            <div className="home">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                        	<div className="title">
                            	<strong>MERN STACK</strong>
                        	</div>
                        	<div className="description">
                        	   A boilerplate code to help you (and me) to get started with the MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack.
                        	</div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});