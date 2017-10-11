import React from 'react';
import {Carousel, Grid, Row, Col, Pagination, Tabs, Tab, Accordion, Panel} from 'react-bootstrap';





const Home = React.createClass({

    render() {
        
        return (
      <div>
       <Grid>
            <Row className="show-grid">
                <Col md={3}>
                </Col>
                <Col md={6}>
                <div id="v">
                <h1>About application</h1>
                </div>
	                       <Accordion>
	                       <Panel header="About application" eventKey="1" bsStyle="danger">
	                     When I created the application, I used framework ReactJs and library React-Bootstrap. 
	                       </Panel>
	                      <Panel header="How setup and how to run app" eventKey="2" bsStyle="info">
	                       Step 1: Git clone this repositories;<br/>
	                       Step 2: Open the folder my-project in installer directory.<br/>
	                       Step 3: Open the folder public in the folder my-project.<br/>
	                       Step 4: Find the file index and click it 2 times with the left mouse button.
	                       </Panel>
						    <Panel header="About calculator" eventKey="3" bsStyle="warning">
						      Choose dates using calendars. In the bottom field, there will be a difference in the days between dates.
						    </Panel>
						    <Panel header="About contact us" eventKey="4" bsStyle="success">
						      In contact us links to the developer's public resources.
						    </Panel>
						  </Accordion>
                </Col>
            </Row>

            <Row className="show-grid">
                <div className="footer">
                <p className="footer_p">
                About application
                </p>
                </div>
        
            </Row>
      </Grid>     

 </div>

        );
    }
});

export default Home;