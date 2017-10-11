import React from 'react';
import { Link } from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, LinkContainer } from 'react-bootstrap';

import './components/InboxPage2.less';


const App = React.createClass({
    render() {
        return (
        <div className='app'>
            <Navbar inverse collapseOnSelect>
			    <Nav>
			            
			  <NavItem eventKey={1}><Link to="/Home">About application</Link></NavItem>
			  <NavItem eventKey={2}><Link to="/Calc">Calculator</Link></NavItem>
			  <NavItem eventKey={3}><Link to="/Contact">Contact us</Link></NavItem>
			  
			            


          
			    </Nav>
			    </Navbar>
			   

                    <div className='content'>
                    {this.props.children}
                    </div>
                               
                  
                   
            </div>
           );
    }
});

export default App;
