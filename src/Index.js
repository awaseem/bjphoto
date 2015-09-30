import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import Admin from "./components/Admin";

window.React = React;

React.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/poweredby" component={PoweredBy}/>
        </Route>
        <Route path="/admin" component={Admin}>

        </Route>
    </Router>
    , document.getElementById('content')
);
