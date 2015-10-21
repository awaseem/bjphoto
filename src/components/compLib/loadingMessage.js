/**
 * Created by awaseem on 15-10-16.
 */

import React from "react";

export default React.createClass({
    render: function () {
        return (
            <div className="ui active dimmer">
                <div className="ui large text loader">{this.props.loadingMessage}</div>
            </div>
        );
    }
});
