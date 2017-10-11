import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory, Redirect} from 'react-router';


import App from './App.jsx';
import CalcPage from './components/CalcPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import Home from './components/Home.jsx';







ReactDOM.render(
    <Router history={hashHistory}>
        <Redirect from='/' to='/Home' />
        <Route path='/' component={App}>
            <Route path='/Home' component={Home} />
            <Route path='/Calc' component={CalcPage} />
            <Route path='/Contact' component={ContactPage} />
           
           

    </Route>
    </Router>,
    document.getElementById('mount-point')
);