/**
 * Created by awaseem on 15-10-02.
 */

import React from "react";
import { logout } from  "../../../Lib/auth";

export default React.createClass({
    componentDidMount: function () {
        logout();
    },
    render: function () {
        return (
            <p>You are now logged out!</p>
        );
    }
})