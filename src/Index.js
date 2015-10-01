import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import Admin from "./components/Admin/Admin";
import LoginBox from "./components/Admin/loginFrom/loginForm";

window.React = React;

let checkAuth = function (nextState, replaceState) {
    replaceState({ nextPathname: nextState.location.pathname }, 'admin/login');
};

React.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/poweredby" component={PoweredBy}/>
        </Route>
        <Route path="/admin" component={Admin}>
            <Route path="login" component={LoginBox}/>
            <Route path="dashboard" component={About} onEnter={checkAuth}/>
        </Route>
    </Router>
    , document.getElementById('content')
);
