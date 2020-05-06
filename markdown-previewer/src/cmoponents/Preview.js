import React from "react";
import marked from 'marked'; 


const Preview = props => {

    function createMarkup() {
        var rawMarkup = marked(props.textMd);
        return {__html: rawMarkup};
    }
    
    return (
        <div className="half-col">
            <h3>Your Previewer</h3>
            <div id="preview" className="preview"
                dangerouslySetInnerHTML={createMarkup()} />
        </div>  
    )
}

export default Preview;