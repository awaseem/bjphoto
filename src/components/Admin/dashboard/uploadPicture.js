/**
 * Created by awaseem on 15-10-03.
 */

import React from "react";
import { uploadImage } from "../../../Lib/image";

export default React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var reader = new FileReader();
        reader.onload = function(event) {
            let fileData = event.target.result.match(/,(.*)$/)[1];
            uploadImage("test", "test", fileData)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        };
        reader.readAsDataURL(React.findDOMNode(this.refs.image).files[0]);
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" ref="title"/>
                <input type="text" name="descriptions" ref="description"/>
                <input type="file" name="photo" ref="image"/>
                <input type="submit" value="upload"/>
            </form>
        )
    }
});
