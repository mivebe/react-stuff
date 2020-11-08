import React, { useState } from "react";

function CreateArea(props) {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.handleSubmit(title, text)
            }} >
                <input name="title" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={text} onChange={(e) => { setText(e.target.value) }} />
                <button >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
