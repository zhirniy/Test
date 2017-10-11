import React from 'react';
import {Carousel, Grid, Row, Col, Pagination, Tabs, Tab} from 'react-bootstrap';

var NumericInput = require('react-numeric-input');
const CalcPage = React.createClass({
     getInitialState: function() {
    return {
      on: 0,
      off: 0
    };
  },

  setOn: function(event) {
    this.setState({on: (new Date(event.target.value.replace(/-/g, ","))).getTime()/(1000*60*60*24)});
  },

  setOff: function(event) {
    this.setState({off: (new Date(event.target.value.replace(/-/g, ","))).getTime()/(1000*60*60*24)});
  },
  
    render() {
    let result=0;
    if(!this.state.off || !this.state.off){
    result = 0;
    }
    else{
    result = Math.abs(this.state.off - this.state.on);
    }
            return (

      
   <div>
       <Grid>
            <Row className="show-grid">
                <Col md={4}>
                </Col>
                <Col md={4}>
                <div id="v">
                <h1>Calculator</h1>
                <label>Data on</label> <input type="date" value={this.state.value} onChange={this.setOn}/><br/><br/>
                <label>Data off</label><input type="date" value={this.state.value} onChange={this.setOff}/><br/><br/>
                <label>Result, days:</label><input size="16" disabled type="text" value = {result}/>

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
