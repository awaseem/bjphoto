/**
 * Created by awaseem on 15-09-30.
 */

import React from 'react';
import LoginBox from "./loginFrom/loginForm";
import Dashboard from "./dashboard/dashboard";
import { login, checkAuth, logout } from  "../../Lib/auth.js";

export default React.createClass({
    getInitialState: function () {
        return {
            isLoggedIn: checkAuth()
        }
    },
    logout: function () {
        logout();
        this.setState({
            isLoggedIn: false
        })
    },
    login: function () {
        this.setState({
            isLoggedIn: true
        })
    },
    render: function () {
        let loginBox;
        if (this.state.isLoggedIn) {
            loginBox = <Dashboard logoutCallback={this.logout}/>;
        }
        else {
            loginBox = <LoginBox loginCallback={this.login}/>;
        }
        return (
            <div>
                <h2>Admin</h2>
                {loginBox}
            </div>
        );
    }
});