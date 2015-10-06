/**
 * Created by awaseem on 15-09-30.
 */

import React from "react";

export default React.createClass({
    render: function () {
        return (
            <div className="ui error message">
                <div className="header">Error!</div>
                <p>{this.props.errorMessage}</p>
            </div>
        );
    }
});