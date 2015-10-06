/**
 * Created by awaseem on 15-10-04.
 */

import React from "react";

export default React.createClass({
    render: function () {
        return (
            <div className="ui success message">
                <div className="header">Success!</div>
                <p>{this.props.successMessage}</p>
            </div>
        );
    }
});