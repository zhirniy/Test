import React from 'react';
import {Grid, Row, Col, Pagination, Tabs, Tab, Accordion, Panel} from 'react-bootstrap';



const ContactPage = React.createClass({
  
    render() {
            return (

    <div>
       <Grid>
            <Row className="show-grid">
                <Col md={3}>
                </Col>
                <Col md={6}>
                <div id="v">
                <h1>Contact us</h1>
                </div>
                
                  <Accordion>
                         <Panel header="Email" eventKey="1" bsStyle="primary">
                         <img  alt="Email" src='img/mail.png'/>
                          <h4>denis_777@ukr.net</h4>
                          <h4>ing2758@gmail.com</h4>
                         </Panel>
                         <Panel header="Facebook" eventKey="2" bsStyle="primary">
                          <a href="https://www.facebook.com/profile.php?id=100001779947900">
                          <img  alt="Facebook" src='img/facebook.png'/>
                          </a>
                          <br/>
                          <h4> Денис Жирный</h4>
                          </Panel>
                          <Panel header="Linkedin" eventKey="3" bsStyle="primary">
                            <a href=" https://www.linkedin.com/in/%D0%B6%D0%B8%D1%80%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-7b864376/">
                             <img  alt="Facebook" src='img/lib.png'/></a>
                            <br/>
                            <h4> Денис Жирный</h4>
                            </Panel>
                          <Panel header="Github" eventKey="4" bsStyle="primary">
                           <a href="https://github.com/zhirniy/"><img  alt="GitHub" src='img/git.png'/></a>
                          <br/>
                           <h4>zhirniy</h4>
                          </Panel>
              </Accordion>
               

                </Col>
            </Row>

            <Row className="show-grid">
                <div className="footer">
                <p className="footer_p">
                Contact us
                </p>
                </div>
        
            </Row>
      </Grid>     

 </div>




    
          


            
    );
  }
});

export default ContactPage;
