/**
 * Created by awaseem on 15-10-01.
 */

import React from "react";
import Upload from "./uploadPicture";

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2>Dashboard</h2>
                <button className="ui red button" onClick={this.props.logoutCallback}>Logout</button>
                <br/>
                <Upload/>
            </div>
        )
    }
});