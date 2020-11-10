import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")


    return (
        <div>
            <form className="create-note" onSubmit={(e) => {
                e.preventDefault()
                props.handleSubmit(title, text)
            }} >
                {isExpanded && <input name="title" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={text} onClick={() => { setExpanded(true) }} onChange={(e) => { setText(e.target.value) }} />
                <Zoom in={isExpanded}><button><AddIcon /></button>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
