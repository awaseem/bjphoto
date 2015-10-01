/**
 * Created by awaseem on 15-09-30.
 */

import React from 'react';
import LoginBox from "./loginFrom/loginForm";
import { login } from  "../../Lib/auth.js";
import { setToken, getToken } from "../../Config/token";

export default React.createClass({
    render() {
        return (
            <div>
                <h2>Admin</h2>
                {this.props.children}
            </div>
        );
    }
});