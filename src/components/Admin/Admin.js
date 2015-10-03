/**
 * Created by awaseem on 15-09-30.
 */

import React from 'react';
import { Link } from "react-router";
import LoginBox from "./loginFrom/loginForm";
import { login, checkAuth } from  "../../Lib/auth.js";

export default React.createClass({
    getInitialState: function () {
        return {
            isLoggedIn: checkAuth()
        }
    },
    render: function () {
        let loginOrDash;
        let logout;
        if (this.state.isLoggedIn) {
            loginOrDash = <Link className="ui large blue button" to="/admin/dashboard">Dashboard</Link>;
            logout = <Link className="ui large red button" to="/admin/logout">Logout</Link>;
        }
        else {
            loginOrDash = <Link className="medium ui green button" to="/admin/login">Login</Link>;
        }
        return (
            <div>
                <h2>Admin</h2>
                {loginOrDash}
                {logout}
                {this.props.children}
            </div>
        );
    }
});