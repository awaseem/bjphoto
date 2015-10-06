/**
 * Created by awaseem on 15-10-03.
 */

import React from "react";
import Error from "../../compLib/errorMessage";
import Success from "../../compLib/successMessage";
import { uploadImage } from "../../../Lib/image";

export default React.createClass({
    getInitialState: function () {
        return {
            errorMessage: "",
            successMessage: ""
        }
    },

    uploadFile: function (title, description, imageData) {
        uploadImage(title, description, imageData)
            .then( () => {
                this.setState({
                    successMessage: "Successfully uploaded image!"
                })
            })
            .catch( (err) => {
                err.response.json().then((data) => {
                    this.setState({
                        errorMessage: data.message
                    })
                })
            } )
    },

    handleSubmit: function (e) {
        e.preventDefault();

        let title = React.findDOMNode(this.refs.title).value.trim();
        let description = React.findDOMNode(this.refs.description).value.trim();
        let image = React.findDOMNode(this.refs.image).files[0];

        if (!image || !description || !title) {
            return this.setState({
                errorMessage: "Missing values"
            });
        }

        let reader = new FileReader();
        reader.onload = (event) => {
            let imageData = event.target.result.match(/,(.*)$/)[1];
            this.uploadFile(title, description, imageData);
        };
        reader.readAsDataURL(React.findDOMNode(this.refs.image).files[0]);
    },

    render: function () {
        let error;
        if (this.state.errorMessage) {
            error = <Error errorMessage={this.state.errorMessage}/>;
        }
        if (this.state.successMessage) {
            return (
                <Success successMessage={this.state.successMessage}/>
            );
        }
        else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" name="title" ref="title"/>
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <textarea rows="2" name="description" ref="description"></textarea>
                        </div>
                        <div className="field">
                            <label className="ui icon button">
                                <i className="file icon"></i>
                                Open File
                                <input type="file" ref="image" name="photo" style={{ display: "none" }}/>
                            </label>
                        </div>
                        <input className="ui button"  type="submit" value="Upload Image"/>
                    </div>
                    {error}
                </form>
            );
        }
    }
});
