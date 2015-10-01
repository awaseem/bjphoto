/**
 * Created by awaseem on 15-09-30.
 */

import React from "react";
import Error from "./errorMessage";
import { login } from "../../../Lib/auth";

export default React.createClass({
    getInitialState: function () {
        return {
            loginError: ""
        }
    },
    handleLogin: function (e) {
        e.preventDefault();
        let loginInfo = {
            username: React.findDOMNode(this.refs.username).value.trim(),
            password: React.findDOMNode(this.refs.password).value.trim()
        };
        if (!loginInfo.username && !loginInfo.password) {
            this.setState({ loginError: "You need a username and password to log in!"});
            return
        }
        else if (!loginInfo.username) {
            this.setState({ loginError: "You need a username to log in!"});
            return
        }
        else if (!loginInfo.password) {
            this.setState({ loginError: "You need a password to log in!"});
            return
        }
        login(loginInfo.username, loginInfo.password)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    this.setState({ loginError: "Username or password does not match!" });
                }
                else {
                    this.setState({ loginError: "Internal server error!" });
                }
            })
    },
    render: function () {
        let errorMessage;
        if (this.state.loginError) {
            errorMessage = <Error errorMessage={this.state.loginError}/>;
        }
        return (
            <div className="login form">
                <form className="ui form" onSubmit={this.handleLogin}>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" ref="username"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" ref="password"/>
                    </div>
                    <div className="field">
                        <button className="ui button" type="submit">Login</button>
                    </div>
                </form>
                {errorMessage}
            </div>
        );
    }
});