/**
 * Created by awaseem on 15-10-03.
 */

import React from "react";
import Error from "../../compLib/errorMessage";
import Success from "../../compLib/successMessage";
import Loading from "../../compLib/loadingMessage";
import { uploadImage } from "../../../Lib/image";
import { uploadImgur } from  "../../../Lib/imgur";

export default React.createClass({
    getInitialState: function () {
        return {
            errorMessage: "",
            successMessage: "",
            uploadingPicture: false
        }
    },

    uploadFile: function (title, description, imageData) {
        this.setState({
            uploadingPicture: true
        });
        uploadImgur(imageData)
            .then( (imgurRes) => {
                return uploadImage(title, description, imgurRes.data.link);
            })
            .then( () => {
                this.setState({
                    successMessage:"Successfully uploaded image!",
                    uploadingPicture: false
                });
            })
            .catch( (err) => {
                if (err.response) {
                    err.response.json().then((data) => {
                        this.setState({
                            errorMessage: data.message,
                            uploadingPicture: false
                        })
                    });
                }
                else {
                    this.setState({
                        errorMessage: "Error: failed to upload image due to unknown!",
                        uploadingPicture: false
                    })
                }
            } );
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
        let loadingState;
        let disableButton = false;
        if (this.state.errorMessage) {
            error = <Error errorMessage={this.state.errorMessage}/>;
        }
        if (this.state.successMessage) {
            return (
                <Success successMessage={this.state.successMessage}/>
            );
        }
        if (this.state.uploadingPicture) {
            disableButton = true;
            loadingState = <Loading loadingMessage="Uploading Picture"/>;
        }
        return (
            <div className="ui segment">
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
                        <input className={disableButton ? "ui button disabled" : "ui button"} type="submit" value="Upload Image"/>
                    </div>
                    {error}
                    {loadingState}
                </form>
            </div>
        );
    }
});
