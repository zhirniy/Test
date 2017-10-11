import React from 'react';
import {Carousel, Grid, Row, Col, Pagination, Tabs, Tab} from 'react-bootstrap';

var NumericInput = require('react-numeric-input');
const CalcPage = React.createClass({
   getInitialState: function() {
    return {
      price: 0,
      offer: 0,
      result: 0
    };
  },
   caclResult: function(event) {

    this.setState({result: (new Date(event.target.value.replace(/-/g, ","))).getTime()/(1000*60*60*24) });
  },
    render() {
            return (

      
   <div>
       <Grid>
            <Row className="show-grid">
                <Col md={4}>
                </Col>
                <Col md={4}>
                <div id="v">
                <h1>Calculator</h1>
                <label>Data on</label> <input type="date" value={this.state.value} onChange={this.caclResult}/><br/><br/>
                <label>Data off</label><input type="date" value={this.state.value} onChange={this.caclResult}/><br/><br/>
                <label>Result</label><span>Итого: {this.state.result}</span>/>

                </div>
                </Col>
            </Row>

            <Row className="show-grid">
                <div className="footer">
                <p className="footer_p">
                Calculator
                </p>
                </div>
        
            </Row>
      </Grid>     

 </div>   
    
            
    );
  }
});

export default CalcPage;
