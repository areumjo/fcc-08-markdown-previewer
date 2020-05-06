import React from "react";

import { TextArea } from 'semantic-ui-react';

const Textarea = props => {
    return (
        <div className="half-col">
            <h3>Your editor</h3>
            <div>
                <TextArea id="editor" 
                value={props.textMd}
                onChange={e => props.setTextMd(e.target.value)}
                cols={60} 
                rows={50}
                />
            </div>
        </div>
    )
}

export default Textarea;