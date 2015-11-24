/**
 * Created by awaseem on 15-11-23.
 */

import React from "react";
import MediumEditor from  "medium-editor";

export default React.createClass({
    getInitialState: function () {
        return {
            content: ""
        }
    },

    componentDidMount: function () {
        this.editor = new MediumEditor(".editor-test", {
            toolbar: {
                buttons: ['bold', 'italic', 'underline', "anchor", 'quote', "h1", "h2", "h3", "unorderedlist", "justifyLeft", "justifyCenter", "justifyRight"],
                anchorPreview: false
            },
            paste: {
                forcePlainText: true,
                cleanPastedHTML: false
            }
        });
        this.editor.subscribe("editableInput", (event, editable) => {
            this.setState({
                content: editable.innerHTML
            })
        })
    },

    render: function () {
        return (
            <div>
                <div className="editor-test">
                </div>
                <div>
                    <h1>Raw html</h1>
                    {this.state.content}
                </div>
                <div className="show" dangerouslySetInnerHTML={{__html: this.state.content}}/>
            </div>
        );
    }
})