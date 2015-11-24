/**
 * Created by awaseem on 15-10-01.
 */

import React from "react";
import $ from "jquery";
import Upload from "./uploadPicture";
import MedEditor from "./mediumEditor";

export default React.createClass({
    getInitialState: function () {
        return {
            logoutDisabled: false
        }
    },

    enableLogout: function () {
        this.setState({
            logoutDisabled: false
        })
    },

    disableLogout: function () {
        this.setState({
            logoutDisabled: true
        })
    },

    render: function () {
        return (
            <div>
                <h2>Dashboard</h2>
                <button className="ui red button" onClick={this.props.logoutCallback}>Logout</button>
                <br/>
                <Upload/>
                <MedEditor/>
            </div>
        )
    }
});